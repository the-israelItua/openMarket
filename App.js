import React from 'react';
import type {Node} from 'react';
import 'react-native-gesture-handler';
import RootNavigation from './src/navigation';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';

Amplify.configure(config);

const App: () => Node = () => {
  return <RootNavigation />;
};

export default withAuthenticator(App);
