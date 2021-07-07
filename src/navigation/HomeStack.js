import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import HeaderComponent from '../components/Header';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <HeaderComponent />,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'tomato',
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
