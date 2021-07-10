import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import Amplify from 'aws-amplify';
import 'react-native-gesture-handler';
import store from './src/store';
import RootNavigation from './src/navigation';
import config from './src/aws-exports';
import SplashScreen from './src/screens/SplashScreen';

Amplify.configure(config);

const App: () => Node = () => {
  // useEffect(() => {
  //   const checkAuthStatus = async () => {
  //     try {
  //       const result = await Auth.currentAuthenticatedUser();
  //     } catch {
  //       setIsSignedIn(false);
  //     }

  //     const interval = setInterval(() => {
  //       setIsChecking(false);
  //     }, 4000);
  //     return () => clearInterval(interval);
  //   };

  //   checkAuthStatus();
  // }, []);

  // if (isChecking) {
  //   return <SplashScreen />;
  // }

  //   const signIn = async (username, password) => {
  //     try {
  //         const user = await Auth.signIn(username, password);
  //         setIsSignedIn(true)
  //     } catch (error) {
  //         console.log('error signing in', error);
  //     }
  // }
  //   }
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
