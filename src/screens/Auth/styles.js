import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  top: {
    marginTop: 78,
    marginBottom: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'tomato',
  },
  subtitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  sub: {
    fontSize: 18,
    lineHeight: 22,
    color: '#748CAD',
  },
  form: {
    width: screenWidth - 30,
  },
  formGroup: {
    marginTop: 24,
  },
  forgotPass: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    color: 'tomato',
    marginTop: 8,
    marginBottom: 32,
  },
  redirect: {
    marginTop: 24,
    height: 46,
    borderRadius: 4,
    backgroundColor: '#FAFAFE',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  redirectText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 16,
    color: '#748CAD',
  },
  create: {
    color: 'tomato',
  },
  btn: {
    marginTop: 24,
  },
});

export default styles;
