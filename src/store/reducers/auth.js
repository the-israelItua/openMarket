import {authTypes} from '../types/auth';

const initState = {
  isSignedIn: false,
  userData: [],
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case authTypes.SIGN_IN: {
      return {
        isSignedIn: true,
        userData: action.payload,
      };
    }
    case authTypes.SIGN_OUT: {
      return {
        isSignedIn: false,
        userData: [],
      };
    }
    default:
      return state;
  }
};
