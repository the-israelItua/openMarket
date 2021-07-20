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
import {useForm, Controller} from 'react-hook-form';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {signIn} from '../../store/actions/auth';
import styles from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {handleSubmit, control, errors} = useForm();

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const onSignIn = values => {
    // setLoading(true);
    // dispatch(signIn(name, password, () => setLoading(false)));
    console.log(values);
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
              <Controller
                defaultValue=""
                name="username"
                control={control}
                rules={{
                  required: {value: true, message: 'Username is required'},
                }}
                render={({onChange, value}) => (
                  <Input
                    label="Username"
                    value={value}
                    onChangeText={text => onChange(text)}
                    placeholder="Enter your username."
                    error={errors.username}
                    errorText={errors?.username?.message}
                  />
                )}
              />
            </View>

            <View style={styles.formGroup}>
              <Controller
                defaultValue=""
                name="password"
                control={control}
                rules={{
                  required: {value: true, message: 'Password is required'},
                  minLength: {
                    value: 6,
                    message: 'Passwords should contain 6+ characters.',
                  },
                }}
                render={({onChange, value}) => (
                  <Input
                    label="Password"
                    secureTextEntry={!showPassword}
                    value={value}
                    onChangeText={text => onChange(text)}
                    placeholder="Enter your password."
                    error={errors.password}
                    errorText={errors?.password?.message}
                    icon={
                      <FontAwesome
                        name={!showPassword ? 'eye' : 'eye-slash'}
                        color="#748CAD"
                        size={24}
                        onPress={() => setShowPassword(!showPassword)}
                      />
                    }
                  />
                )}
              />
            </View>
            <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPass}>Forgot password?</Text>
            </Pressable>
            <Button
              text={loading ? 'Please wait...' : 'Sign In'}
              color="#fff"
              onPress={handleSubmit(onSignIn)}
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
