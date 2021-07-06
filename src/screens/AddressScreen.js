import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CountryList from 'country-list';
import ProductItem from '../components/ProductItem';
import Input from '../components/Input';
import Button from '../components/Button';
import Products from '../../assets/data/products';

const countries = CountryList.getData();

const AddressScreen = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <Picker
            selectedValue={selectedCountry}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCountry(itemValue)
            }>
            {countries.map(country => (
              <Picker.Item
                key={country.code}
                label={country.name}
                value={country.code}
              />
            ))}
          </Picker>
        </View>
        <View style={styles.row}>
          <Input
            label="Full name(First and last names)"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.row}>
          <Input
            label="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.row}>
          <Input
            label="Address"
            value={address}
            onChangeText={setAddress}
            placeholder="Enter address here"
          />
        </View>
        <View style={styles.row}>
          <Input
            label="Address"
            value={address}
            onChangeText={setAddress}
            placeholder="Enter address here"
          />
        </View>
        <View style={styles.row}>
          <Input
            label="Address"
            value={address}
            onChangeText={setAddress}
            placeholder="Enter address here"
          />
        </View>
        <View style={styles.row}>
          <Input
            label="Address"
            value={address}
            onChangeText={setAddress}
            placeholder="Enter address here"
          />
        </View>
        <View style={styles.row}>
          <Input
            label="Address"
            value={address}
            onChangeText={setAddress}
            placeholder="Enter address here"
          />
        </View>
        <View style={styles.row}>
          <Input
            label="Address"
            value={address}
            onChangeText={setAddress}
            placeholder="Enter address here"
          />
        </View>
        <View style={styles.row}>
          <Input
            label="Address"
            value={address}
            onChangeText={setAddress}
            placeholder="Enter address here"
          />
        </View>
        <View style={styles.row}>
          <Input
            label="Address"
            value={address}
            onChangeText={setAddress}
            placeholder="Enter address here"
          />
        </View>
        <Button text="Checkout" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    marginVertical: 8,
  },
});

export default AddressScreen;
