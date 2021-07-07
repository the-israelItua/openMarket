import React from 'react';
import {Text, View, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import AntIcons from 'react-native-vector-icons/AntDesign';

const HeaderComponent = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Icons name="search" size={18} color="tomato" />
        <TextInput style={styles.input} placeholder="Search Products" />
      </View>
      <AntIcons name="shoppingcart" size={28} color="white" />
    </SafeAreaView>
  );
};

const styles = {
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'tomato',
    height: 110,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'tomato',
    borderWidth: 1,
    height: 50,
    margin: 10,
    padding: 5,
    paddingLeft: 15,
    borderRadius: 10,
    width: '84%',
  },
  input: {
    marginLeft: 10,
    height: 50,
    width: '100%',
  },
};

export default HeaderComponent;
