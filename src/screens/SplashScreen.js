import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Icon name="local-grocery-store" size={28} color="#fff" />
        <Text style={styles.logoText}>penMarket</Text>
      </View>
      <View style={styles.loader}>
        <ActivityIndicator color="#fff" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  loader: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
