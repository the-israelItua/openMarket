import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Auth} from 'aws-amplify';
import ProductItem from '../components/ProductItem';
import Button from '../components/Button';
import Products from '../../assets/data/products';

const MenuScreen = () => {
  return (
    <SafeAreaView>
      <View style={{margin: 30}}>
        <Button text="Log Out" color="white" onPress={() => Auth.signOut()} />
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
