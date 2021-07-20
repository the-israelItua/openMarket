import React from 'react';
import {Text, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Input = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputField}>
        <TextInput
          {...props}
          style={[styles.input, props.error && {borderColor: '#FF5B5B'}]}
        />
        <View style={styles.icon}>{props.icon}</View>
      </View>
      {props.errorText && (
        <View style={styles.error}>
          <Icon name="error-outline" size={18} color="#FF5B5B" />
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )}
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
  inputField: {
    position: 'relative',
    borderWidth: 1,
    borderColor: '#E4E9F2',
    borderRadius: 4,
    height: 46,
  },
  input: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    height: 46,
    padding: 10,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  error: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  errorText: {
    color: '#FF5B5B',
    marginLeft: 9.33,
  },
});

export default Input;
