import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import TabNavigation from './TabNavigation';

const RootNavigation = () => {
  const isSignedIn = useSelector(state => state.auth.isSignedIn);
  return (
    <NavigationContainer>
      {isSignedIn ? <TabNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
