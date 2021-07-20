import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {confirmCode} from '../../store/actions/auth';
import styles from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const userName = route.params.userName;
  const dispatch = useDispatch();

  const onConfirm = () => {
    setLoading(true);
    dispatch(
      confirmCode(
        userName,
        code,
        () => navigation.navigate('SignIn'),
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
              <Text style={styles.sub}>Check your mail.</Text>
              <Text style={styles.sub}>We sent your confirmation code.</Text>
            </View>
          </View>
          <View style={styles.form}>
            <View style={styles.formGroup}>
              <Input
                label="Username"
                value={userName}
                placeholder="Enter your username."
              />
            </View>
            <View style={styles.formGroup}>
              <Input
                label="Confirmation Code"
                value={code}
                onChangeText={setCode}
                placeholder="Enter your confirmation code."
                autoFocus
              />
            </View>
            <Pressable>
              <Text style={styles.forgotPass}>Resend Code</Text>
            </Pressable>
            <Button text="Confirm Code" color="#fff" style={styles.btn} />
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
