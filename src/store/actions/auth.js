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
  (username, email, password, onSuccess = () => null) =>
  async dispatch => {
    try {
      const {user} = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      console.log(user);
      return onSuccess();
    } catch (error) {
      Alert.alert('A error occurred.', error.message, [{text: 'OK'}]);
      return onSuccess();
    }
  };

export const signOut = () => dispatch => {
  Auth.signOut();
  dispatch({
    type: authTypes.SIGN_OUT,
  });
};
