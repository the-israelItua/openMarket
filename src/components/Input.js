import React from 'react';
import {Text, StyleSheet, TextInput, View} from 'react-native';

const Input = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    color: '#748CAD',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E4E9F2',
    borderRadius: 4,
    height: 46,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    padding: 10,
  },
});

export default Input;
