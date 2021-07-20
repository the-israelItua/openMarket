import React, {useEffect, useState} from 'react';
import {FlatList, Text, StyleSheet, View, ScrollView} from 'react-native';
import {DataStore} from 'aws-amplify';
import {Product} from '../models';
import ProductItem from '../components/ProductItem';
import ImageCarousel from '../components/ImageCarousel';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const results = await DataStore.query(Product);
      setProducts(results);
    };
    fetchProducts();
  }, []);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      value: 'All',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      value: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      value: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-bb28ba',
      value: 'First Item',
    },
    {
      id: '3ac68afc-c605-4f8-fbd91aa97f63',
      value: 'Second Item',
    },
    {
      id: '58694a0f-3da196-145571e29d72',
      value: 'Third Item',
    },
  ];

  return (
    <View>
      <FlatList
        horizontal
        renderItem={({item}) => (
          <View style={styles.nav}>
            <Text
              style={[
                styles.navItem,
                item.value === 'All' && styles.navSelected,
              ]}>
              {item.value}
            </Text>
          </View>
        )}
        data={DATA}
        showsHorizontalScrollIndicator={false}
      />

      <FlatList
        style={styles.container}
        numColumns={2}
        data={products}
        renderItem={({item}) => (
          <View style={{width: '48%'}}>
            <ProductItem item={item} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.scroll}>
            <ImageCarousel />
            <Text style={styles.header}>For your interests</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  nav: {
    backgroundColor: '#ffffff',
  },
  navItem: {
    color: 'grey',
    padding: 16,
  },
  navSelected: {
    color: 'tomato',
    fontWeight: '600',
  },
  scroll: {
    backgroundColor: '#ffffff',
  },
  header: {
    margin: 16,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;
