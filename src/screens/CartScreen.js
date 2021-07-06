import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import CartProducts from '../../assets/data/cart';

const CartScreen = () => {
  const totalPrice = CartProducts.reduce(
    (total, product) => total + product.item.price * product.quantity,
    0,
  );

  return (
    <FlatList
      style={styles.container}
      data={CartProducts}
      renderItem={({item}) => <CartItem item={item.item} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <View style={{backgroundColor: '#fff', borderRadius: 5}}>
          <Text style={styles.total}>
            Subtotal ({CartProducts.length} Items):{'  '}
            <Text style={styles.totalPrice}> ${totalPrice.toFixed(2)}</Text>
          </Text>
          <Button text="Proceed to checkout" style={{margin: 10}} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
});

export default CartScreen;
