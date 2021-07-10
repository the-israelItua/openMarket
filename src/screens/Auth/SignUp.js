import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Dimensions,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {Auth} from 'aws-amplify';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {signUp} from '../../store/actions/auth';
import styles from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const screenWidth = Dimensions.get('screen').width;

const SignUp = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  const onSignUp = () => {
    setLoading(true);
    dispatch(signUp(name, email, password, () => setLoading(false)));
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
              <Text style={styles.sub}>
                Create your account in two simple steps.
              </Text>
              <Text style={styles.sub}>It will only take a minute</Text>
            </View>
          </View>
          <View style={styles.form}>
            <View style={styles.formGroup}>
              <Input
                label="Username"
                value={name}
                onChangeText={setName}
                placeholder="Enter your preferred username."
              />
            </View>
            <View style={styles.formGroup}>
              <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email address."
              />
            </View>
            <View style={styles.formGroup}>
              <Input
                label="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                placeholder="Choose your password."
              />
            </View>
            <View style={styles.formGroup}>
              <Input
                label="Confirm Password"
                secureTextEntry={true}
                value={cPassword}
                onChangeText={setCPassword}
                placeholder="Confirm your password."
              />
            </View>
            <Button
              text={loading ? 'Please wait...' : 'Sign Up'}
              color="#fff"
              style={styles.btn}
              onPress={onSignUp}
            />
          </View>
        </View>
        <Pressable
          style={styles.redirect}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.redirectText}>
            Already have an account?{' '}
            <Text style={styles.create}>Sign In here</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
