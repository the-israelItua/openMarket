import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RootNavigation from './src/navigation';

const App: () => Node = () => {
  return <RootNavigation />;
};

export default App;
