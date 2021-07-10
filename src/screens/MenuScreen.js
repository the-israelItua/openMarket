import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../components/Button';
import {signOut} from '../store/actions/auth';

const MenuScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <View style={{margin: 30}}>
        <Button
          text="Log Out"
          color="white"
          onPress={() => dispatch(signOut())}
        />
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
