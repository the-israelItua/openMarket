import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import ProductItem from '../components/ProductItem';
import Products from '../../assets/data/products';

const HomeScreen = () => {
  return (
    <FlatList
      style={styles.container}
      data={Products}
      renderItem={({item}) => <ProductItem item={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#e3e3e3',
  },
});

export default HomeScreen;
