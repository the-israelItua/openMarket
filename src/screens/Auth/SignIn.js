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
import {useDispatch} from 'react-redux';
import {Auth} from 'aws-amplify';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {signIn} from '../../store/actions/auth';
import styles from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const onSignIn = () => {
    setLoading(true);
    dispatch(signIn(name, password, () => setLoading(false)));
  };

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
              <Text style={styles.sub}>Log in to continue.</Text>
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

            <View style={styles.formGroup}>
              <Input
                label="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password."
              />
            </View>
            <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPass}>Forgot password</Text>
            </Pressable>
            <Button
              text={loading ? 'Please wait...' : 'Sign In'}
              color="#fff"
              onPress={onSignIn}
            />
          </View>
        </View>
        <Pressable
          style={styles.redirect}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.redirectText}>
            Don’t have an account?{' '}
            <Text style={styles.create}>Create an Account</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
