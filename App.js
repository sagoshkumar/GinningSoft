import * as React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider, useDispatch, useSelector} from 'react-redux';
import Navigation from './src/Navigation/Stack';
import {Store} from './src/Store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {isDark} from './src/Store/slices';
import {LogBox} from 'react-native';
import {userDataFromAsyncStorage} from './src/Store/slices/user';

LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types",
  'ColorPropType will be removed',
  'Failed prop type',
  'VirtualizedLists should never be nested',
]);

LogBox.ignoreAllLogs();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    accent: '#ffffff',
  },
};

const getData = async () => {
  try {
    let value = await AsyncStorage.getItem('isDark').then(res => {
      return res;
    });
    return value;
  } catch (e) {
    console.log(e);
  }
};

const getUserData = async () => {
  try {
    let value = await AsyncStorage.getItem('token').then(res => {
      return res;
    });
    return value;
  } catch (e) {
    console.log(e);
  }
};

const UserAuthenticated = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log(`this is state`);
  console.log(state);
  React.useEffect(() => {
    (async () => {
      let value = getUserData().then(res => {
        console.log('this is res in APp');
        console.log(res, 'userId');
        let v = JSON.parse(res);
        if (v?.userId) {
          dispatch(userDataFromAsyncStorage(v));
        }
      });
    })().catch(err => {
      console.error(err);
    });
  }, []);

  return null;
};

const CheckTheme = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  // console.log(`this is state`);
  // console.log(state);
  React.useEffect(() => {
    (async () => {
      let value = getData().then(res => {
        let v = JSON.parse(res);
        dispatch(isDark(v));
      });
    })().catch(err => {
      console.error(err);
    });
  }, []);

  return null;
};

export default function App() {
  return (
    <Provider store={Store}>
      <UserAuthenticated />
      <CheckTheme />
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </Provider>
  );
}
