import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import ProductItem from '../components/ProductItem';
import QuantityTab from '../components/QuantityTab';
import Button from '../components/Button';
import ImageCarousel from '../components/ImageCarousel';
import Product from '../../assets/data/product';

const DetailsScreen = () => {
  const route = useRoute();

  const productId = route.params.id;

  const [sel, setSel] = useState('');
  const [qty, setQty] = useState(1);
  return (
    <ScrollView style={styles.container}>
      <ImageCarousel images={Product.images} />
      <Text style={styles.title}>{Product.title}</Text>

      <Picker
        selectedValue={sel}
        onValueChange={(itemValue, itemIndex) => setSel(itemValue)}>
        {Product.options.map(option => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>

      <Text style={styles.price}>
        from ${Product.price}{' '}
        {Product.oldPrice && (
          <Text style={styles.oldPrice}>${Product.oldPrice}</Text>
        )}
      </Text>

      <QuantityTab qty={qty} setQty={setQty} />
      <Text style={styles.description}>{Product.description}</Text>
      <View
        style={{flexDirection: 'row', maxWidth: '100%', marginVertical: 20}}>
        <Button
          text="Add to cart"
          onPress={() => {}}
          style={styles.btn1}
          color="white"
        />
        <Button
          text="Buy Now"
          onPress={() => {}}
          style={styles.btn2}
          color="tomato"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    marginLeft: 5,
    textDecorationLine: 'line-through',
  },
  description: {
    marginVertical: 20,
    lineHeight: 20,
  },
  btn1: {
    width: '48%',
    marginRight: '4%',
  },
  btn2: {
    width: '48%',
    backgroundColor: '#fff',
    borderColor: 'tomato',
  },
});

export default DetailsScreen;
