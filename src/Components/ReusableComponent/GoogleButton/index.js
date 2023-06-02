import React, {useState} from 'react';
import {Image, Pressable, ToastAndroid, View} from 'react-native';
import googleIcon from 'src/Assets/Images/icons/icons.png';
import {styles} from './style';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {UserData} from '../../../Store/slices';
import SignUp from '../../../Screens/SignUp';

GoogleSignin.configure({
  webClientId:
    '239188409090-aodjm55hnt4mlrqg3tjs9qr3a07pnnsr.apps.googleusercontent.com',
});
function GoogleButton({navigation, loading, setLoading}) {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  // const [loading, setLoading] = useState(false);

  // console.log('login',user);

  const googleSignIn = async () => {
    setLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      // const userInfo = await GoogleSignin.signIn();
      // setUser({userInfo});
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = await auth.GoogleAuthProvider.credential(
        idToken,
      );

      // Sign-in the user with the credential
      const res = await auth().signInWithCredential(googleCredential);
      dispatch(UserData(res));
      setLoading(false);

      // console.log(res);
      navigation.navigate('profile');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
        setLoading(false);
        // console.log(error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
        setLoading(false);

        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
        setLoading(false);
        // play services not available or outdated
      } else {
        ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
        setLoading(false);
        // some other error happened
      }
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUser({user: null}); // Remember to remove the user from your app's state as well
      // console.log('logout');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.containerTinyLogo}>
      <Pressable onPress={googleSignIn}>
        <Image style={styles.tinyLogo} source={googleIcon} />
      </Pressable>
    </View>
  );
}

export default GoogleButton;
