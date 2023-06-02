import React from 'react';
import {Pressable, ToastAndroid, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './style';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {UserData} from '../../../Store/slices';
// import UserData from '../../../Store/slices';

function FacebookButton({navigation, loading, setLoading}) {
  const dispatch = useDispatch();

  const fbLogin = resCallBack => {
    LoginManager.logOut();
    LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      function (result) {
        if (
          result.declinedPermissions &&
          result.declinedPermissions.includes('email')
        ) {
          resCallBack({message: 'Email is required'});
        }
        if (result.isCancelled) {
          console.log('error');
          setLoading(false);

        } else {
          // console.log(
          // "Login success with permissions: " +
          //   result.grantedPermissions.toString()
          const infoRequest = new GraphRequest(
            '/me?fields=email,name,picture,birthday',
            null,
            resCallBack,
          );
          new GraphRequestManager().addRequest(infoRequest).start();
          // );
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
        setLoading(false);
        ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
      },
    );
  };

  const onFbLogin = async () => {
    setLoading(true);
    try {
      await fbLogin(_responseInfoCallBack);
    } catch (e) {
      console.log('error raised', e);
      setLoading(false);
    }
  };

  const _responseInfoCallBack = async (error, result) => {
    if (error) {
      console.log('error top', error);
      setLoading(false);

      return;
    } else {
      const userData = result;
      // console.log('fb data **********', userData);
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        setLoading(false);
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      // Sign-in the user with the credential
      const res = await auth().signInWithCredential(facebookCredential);
      // console.log('Facebook User Details', res.user);

      dispatch(UserData(res));
      console.log('userData:', res);
      setLoading(false);

      navigation.navigate('profile');
    }
  };

  return (
    <View>
      <Pressable onPress={onFbLogin}>
        <Icon
          style={styles.icons}
          name="facebook-square"
          size={35}
          color="#4285F4"
        />
      </Pressable>
    </View>
  );
}

export default FacebookButton;
