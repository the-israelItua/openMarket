import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {DataStore} from 'aws-amplify';
import {CartItem} from '../models';
import Icon from 'react-native-vector-icons/FontAwesome';
import QuantityTab from './QuantityTab';
import omit from 'lodash/omit';

const CartCard = ({item, updateCartProducts}) => {
  useEffect(() => {
    const subscription = DataStore.observe(CartItem, item.id).subscribe(msg => {
      if (msg.opType === 'UPDATE') {
        updateCartProducts(msg.element);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const onChangeQty = async newQty => {
    const original = await DataStore.query(CartItem, item.id);

    await DataStore.save(
      CartItem.copyOf(original, updated => {
        updated.quantity = newQty;
      }),
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: item.product.image,
          }}
        />
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={3}>
            {item.product.title}
          </Text>
          {item.product.avgRating && (
            <View style={styles.ratings}>
              {[1, 2, 3, 4, 5].map((i, index) => (
                <Icon
                  key={`${item.product.id + index}`}
                  name={
                    index < Math.floor(item.product.avgRating)
                      ? 'star'
                      : index > Math.floor(item.product.avgRating)
                      ? 'star-o'
                      : 'star-half-full'
                  }
                  style={styles.star}
                  size={18}
                  color={'#e47911'}
                />
              ))}
              <Text>{item.product.ratings}</Text>
            </View>
          )}
          <Text style={styles.price}>
            from ${item.product.price?.toFixed(2)}{' '}
            {item.product.oldPrice && (
              <Text style={styles.oldPrice}>
                ${item.product.oldPrice?.toFixed(2)}
              </Text>
            )}
          </Text>
        </View>
      </View>
      <QuantityTab qty={item.quantity} onChangeQty={onChangeQty} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 5,
    padding: 10,
    marginVertical: 3,
  },
  container: {
    flexDirection: 'row',
    height: 150,
  },
  image: {
    width: '30%',
    height: '100%',
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  star: {
    margin: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    marginLeft: 5,
    textDecorationLine: 'line-through',
  },
});

export default CartCard;
