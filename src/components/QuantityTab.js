import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const QuantityTab = ({qty, onChangeQty, onDelete = () => null}) => {
  const onDecrease = () => {
    if (qty === 1) {
      onDelete();
      return;
    }
    onChangeQty(qty - 1);
  };

  const onIncrease = () => {
    onChangeQty(qty + 1);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onDecrease} style={styles.btn}>
        <Icon name={qty === 1 ? 'trash' : 'minus'} size={18} />
      </Pressable>
      <Text style={styles.qty}>{qty}</Text>
      <Pressable onPress={onIncrease} style={styles.btn}>
        <Icon name="plus" size={18} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    width: 120,
    overflow: 'hidden',
  },
  btn: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1d1d1',
  },
  qty: {
    fontSize: 18,
  },
});

export default QuantityTab;
