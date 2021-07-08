import React, {useEffect, useState} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import {DataStore} from 'aws-amplify';
import {Product} from '../models';
import ProductItem from '../components/ProductItem';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const results = await DataStore.query(Product);
      setProducts(results);
    };
    fetchProducts();
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={products}
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
