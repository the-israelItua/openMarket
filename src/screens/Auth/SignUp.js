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
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {useForm, Controller} from 'react-hook-form';
import {signUp} from '../../store/actions/auth';
import styles from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const screenWidth = Dimensions.get('screen').width;

const SignUp = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const {handleSubmit, control, errors, getValues} = useForm();

  const navigation = useNavigation();

  const onSignUp = ({username, email, password}) => {
    setLoading(true);
    dispatch(
      signUp(
        username,
        email,
        password,
        userName => navigation.navigate('ConfirmCode', {userName}),
        () => setLoading(false),
      ),
    );
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
                    placeholder="Enter your preferred username."
                    error={errors.username}
                    errorText={errors?.username?.message}
                  />
                )}
              />
            </View>
            <View style={styles.formGroup}>
              <Controller
                defaultValue=""
                name="email"
                control={control}
                rules={{
                  required: {value: true, message: 'Email is required'},
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Enter a valid email.',
                  },
                }}
                render={({onChange, value}) => (
                  <Input
                    label="Email"
                    value={value}
                    onChangeText={text => onChange(text)}
                    placeholder="Enter your email."
                    error={errors.email}
                    errorText={errors?.email?.message}
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
                    placeholder="Choose your password."
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
            <View style={styles.formGroup}>
              <Controller
                defaultValue=""
                name="confirmPassword"
                control={control}
                rules={{
                  required: {value: true, message: 'Retype your password'},
                  validate: value =>
                    value === getValues('password') ||
                    'The passwords do not match',
                }}
                render={({onChange, value}) => (
                  <Input
                    label="Confirm Password"
                    secureTextEntry={!showCPassword}
                    value={value}
                    onChangeText={text => onChange(text)}
                    placeholder="Confirm your password."
                    error={errors.confirmPassword}
                    errorText={errors?.confirmPassword?.message}
                    icon={
                      <FontAwesome
                        name={!showCPassword ? 'eye' : 'eye-slash'}
                        color="#748CAD"
                        size={24}
                        onPress={() => setShowCPassword(!showCPassword)}
                      />
                    }
                  />
                )}
              />
            </View>
            <Button
              text={loading ? 'Please wait...' : 'Sign Up'}
              color="#fff"
              style={styles.btn}
              onPress={handleSubmit(onSignUp)}
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
