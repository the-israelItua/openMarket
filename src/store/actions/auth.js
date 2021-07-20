import {Alert} from 'react-native';
import {DataStore, Auth} from 'aws-amplify';
import {authTypes} from '../types/auth';

export const signIn =
  (username, password, onComplete = () => null) =>
  async dispatch => {
    try {
      const user = await Auth.signIn(username, password);
      dispatch({
        type: authTypes.SIGN_IN,
        payload: user,
      });
      return onComplete();
    } catch (error) {
      console.log('error signing in', error);
      return onComplete();
    }
  };

export const signUp =
  (username, email, password, onSuccess = () => null, onFail = () => null) =>
  async dispatch => {
    try {
      const {user} = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      return onSuccess(user.username);
    } catch (error) {
      Alert.alert('A error occurred.', error.message, [{text: 'OK'}]);
      return onFail();
    }
  };

export const confirmCode =
  (username, code, onSuccess = () => null, onFail = () => null) =>
  async dispatch => {
    try {
      await Auth.confirmSignUp({
        username,
        code,
      });
      return onSuccess();
    } catch (error) {
      Alert.alert('A error occurred.', error.message, [{text: 'OK'}]);
      return onFail();
    }
  };

export const resendConfirmationCode =
  (username, onSuccess = () => null, onFail = () => null) =>
  async dispatch => {
    try {
      await Auth.resendSignUp(username);
      return onSuccess();
    } catch (err) {
      console.log('error resending code: ', err);
      return onFail();
    }
  };

export const signOut = () => dispatch => {
  Auth.signOut();
  dispatch({
    type: authTypes.SIGN_OUT,
  });
};
