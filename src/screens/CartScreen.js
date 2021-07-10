import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DataStore, Auth} from 'aws-amplify';
import {CartItem, Product} from '../models';
import CartCard from '../components/CartCard';
import Button from '../components/Button';

const CartScreen = () => {
  const navigation = useNavigation();

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      const userData = await Auth.currentAuthenticatedUser();
      const result = await DataStore.query(CartItem, c =>
        c.userSub('eq', userData.attributes.sub),
      );
      setCartProducts(result);
    };

    fetchCartProducts();
  }, []);

  useEffect(() => {
    if (cartProducts.filter(cp => !cp.product).length === 0) {
      return;
    }

    const fetchProducts = async () => {
      // query all products that are used in cart
      const products = await Promise.all(
        cartProducts.map(cartProduct =>
          DataStore.query(Product, cartProduct.productID),
        ),
      );

      // assign the products to the cart items
      setCartProducts(currentCartProducts =>
        currentCartProducts.map(cartProduct => ({
          ...cartProduct,
          product: products.find(p => p.id === cartProduct.productID),
        })),
      );
    };

    fetchProducts();
  }, [cartProducts]);

  const totalPrice = cartProducts.reduce(
    (summedPrice, product) =>
      summedPrice + (product?.product?.price || 0) * product.quantity,
    0,
  );

  if (cartProducts.filter(cp => !cp.product).length !== 0) {
    return (
      <View style={styles.empty}>
        <ActivityIndicator />
      </View>
    );
  }

  const updateCartProducts = update => {
    // setCartProducts(currCartProducts =>
    console.log(update);
    console.log(
      cartProducts.map(cp => {
        if (cp.id === update.id) return cp;
        return {
          ...cp,
          ...update,
        };
      }),
    );
  };

  return (
    <View>
      <View style={{backgroundColor: '#fff', borderRadius: 5}}>
        <Text style={styles.total}>
          Subtotal ({cartProducts.length} Items):{'  '}
          <Text style={styles.totalPrice}> ${totalPrice.toFixed(2)}</Text>
        </Text>
        <Button
          text="Proceed to checkout"
          style={{margin: 10}}
          onPress={() => navigation.navigate('Address')}
          color="white"
        />
      </View>
      <FlatList
        style={styles.container}
        data={cartProducts}
        renderItem={({item}) => (
          <CartCard item={item} updateCartProducts={updateCartProducts} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 80,
    backgroundColor: '#e3e3e3',
  },
  total: {
    fontSize: 18,
    margin: 20,
  },
  totalPrice: {
    color: 'tomato',
    fontWeight: 'bold',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CartScreen;
