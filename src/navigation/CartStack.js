import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen';
import AddressScreen from '../screens/AddressScreen';

const Stack = createStackNavigator();

function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Address"
        component={AddressScreen}
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

export default CartStack;
