import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {DataStore, Auth} from 'aws-amplify';
import {Product, CartItem} from '../models';
import ProductItem from '../components/ProductItem';
import QuantityTab from '../components/QuantityTab';
import Button from '../components/Button';
import ImageCarousel from '../components/ImageCarousel';

const DetailsScreen = () => {
  const route = useRoute();

  const productId = route.params.id;

  const [sel, setSel] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await DataStore.query(Product, productId);
      setProduct(result);
    };
    fetchProduct();
  }, []);

  const onAddToCart = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      if (!product || !userData) {
        return;
      }
      const newCartItem = new CartItem({
        userSub: userData.attributes.sub,
        quantity,
        option: sel,
        productID: product.id,
      });

      DataStore.save(newCartItem);
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView style={styles.container}>
      <ImageCarousel images={product.images} />
      <Text style={styles.title}>{product.title}</Text>

      {product.options && (
        <Picker
          selectedValue={sel}
          onValueChange={(itemValue, itemIndex) => setSel(itemValue)}>
          {product.options.map(option => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>
      )}

      <Text style={styles.price}>
        from ${product.price.toFixed(2)}{' '}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>${product.oldPrice.toFixed(2)}</Text>
        )}
      </Text>

      <QuantityTab qty={quantity} setQty={setQuantity} />
      <Text style={styles.description}>{product.description}</Text>
      <View
        style={{flexDirection: 'row', maxWidth: '100%', marginVertical: 20}}>
        <Button
          text="Add to cart"
          onPress={onAddToCart}
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
