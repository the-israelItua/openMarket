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
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'lightgrey',
    borderRadius: 3,
    height: 40,
  },
});

export default Input;
