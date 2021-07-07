import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import CartProducts from '../../assets/data/cart';

const CartScreen = () => {
  const navigation = useNavigation();
  const totalPrice = CartProducts.reduce(
    (total, product) => total + product.item.price * product.quantity,
    0,
  );

  return (
    <View>
      <View style={{backgroundColor: '#fff', borderRadius: 5}}>
        <Text style={styles.total}>
          Subtotal ({CartProducts.length} Items):{'  '}
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
        data={CartProducts}
        renderItem={({item}) => <CartItem item={item.item} />}
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
});

export default CartScreen;
