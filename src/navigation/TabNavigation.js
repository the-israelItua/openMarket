import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import CartStack from './CartStack';
import MenuScreen from '../screens/MenuScreen';
import Icons from 'react-native-vector-icons/AntDesign';
import FeatherIcons from 'react-native-vector-icons/Feather';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Categories') {
            iconName = 'list';
            return <FeatherIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Cart') {
            iconName = 'shoppingcart';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }
          return <Icons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Categories" component={CartStack} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Profile" component={MenuScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
