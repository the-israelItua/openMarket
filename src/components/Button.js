import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({text, onPress, style, color}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={{...styles.container, ...style}}>
      <Text style={{...styles.text, color: color}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: 50,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    lineHeight: 14,
  },
});

export default Button;
