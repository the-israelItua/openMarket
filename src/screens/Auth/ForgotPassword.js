import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ForgotPassword = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.top}>
            <View style={styles.logo}>
              <Icon name="local-grocery-store" size={24} color="tomato" />
              <Text style={styles.logoText}>penMarket</Text>
            </View>
            <View style={styles.subtitle}>
              <Text style={styles.sub}>Enter your username.</Text>
              <Text style={styles.sub}>We will send you a resend link.</Text>
            </View>
          </View>
          <View style={styles.form}>
            <View style={styles.formGroup}>
              <Input
                label="Username"
                value={name}
                onChangeText={setName}
                placeholder="Enter your username."
              />
            </View>
            <Button text="Send" color="#fff" style={styles.btn} />
          </View>
        </View>
        <Pressable
          style={styles.redirect}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.redirectText}>
            Go back to <Text style={styles.create}>Sign In</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
