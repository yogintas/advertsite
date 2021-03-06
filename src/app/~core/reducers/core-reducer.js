import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { Types } from '../actions';

export const INITIAL_STATE = Immutable({
  user: {},
  fetchingUser: false,
  isLoggedIn: false,
  showSideMenu: false
});

// FETCH USER
const fetchUserAttempt = (state) =>
  state.merge({
    fetchingUser: true
  });

const fetchUserSuccess = (state, { user }) => {
  const result = user
    ? state.merge({
      user,
      fetchingUser: false,
      isLoggedIn: true
    })
    : state;
  return result;
};

const fetchUserFailure = (state, { error }) =>
  state.merge({
    error,
    fetchingUser: false
  });


// LOGIN USER
const loginUserAttempt = (state) =>
  state.merge({
    isLoggingIn: true
  });

const loginUserSuccess = (state, { data }) =>
  state.merge({
    data,
    isLoggingIn: false,
    isLoggedIn: true
  });

const loginUserFailure = (state, { error }) =>
  state.merge({
    error,
    isLoggingIn: false
  });


// LOGOUT USER
const logoutUserAttempt = (state) =>
  state.merge({
    isLoggingOut: true
  });

const logoutUserSuccess = (state) =>
  state.merge({
    data: {},
    isLoggingOut: false,
    isLoggedIn: false
  });

const logoutUserFailure = (state, { error }) =>
  state.merge({
    error,
    isLoggingOut: false
  });


// REGISTER WITH EMAIL
const registerWithEmailAttempt = (state) =>
  state.merge({
    isRegisteringWithEmail: true
  });

const registerWithEmailSuccess = (state, { data }) =>
  state.merge({
    data,
    isRegisteringWithEmail: false,
    isLoggedIn: true
  });

const registerWithEmailFailure = (state, { error }) =>
  state.merge({
    error,
    isRegisteringWithEmail: false
  });


// NEW AD
const newAdAttempt = (state) =>
  state.merge({
    newAd_attempting: true
  });

const newAdSuccess = (state) =>
  state.merge({
    newAd_attempting: false
  });

const newAdFailure = (state, { error }) =>
  state.merge({
    newAd_attempting: true,
    error
  });

// SAVE AD TO USER AD LIST
const saveAdToUserAdListAttempt = (state) =>
  state.merge({
  });

const saveAdToUserAdListSuccess = (state) =>
  state.merge({
  });

const saveAdToUserAdListFailure = (state, { error }) =>
  state.merge({
    error
  });

// UI
const toggleSideMenu = state =>
  state.merge({
    showSideMenu: !state.showSideMenu
  });


export default createReducer(INITIAL_STATE, {
  [Types.FETCH_USER_ATTEMPT]: fetchUserAttempt,
  [Types.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [Types.FETCH_USER_FAILURE]: fetchUserFailure,

  [Types.LOGIN_USER_ATTEMPT]: loginUserAttempt,
  [Types.LOGIN_USER_SUCCESS]: loginUserSuccess,
  [Types.LOGIN_USER_FAILURE]: loginUserFailure,

  [Types.LOGOUT_USER_ATTEMPT]: logoutUserAttempt,
  [Types.LOGOUT_USER_SUCCESS]: logoutUserSuccess,
  [Types.LOGOUT_USER_FAILURE]: logoutUserFailure,

  [Types.REGISTER_WITH_EMAIL_ATTEMPT]: registerWithEmailAttempt,
  [Types.REGISTER_WITH_EMAIL_SUCCESS]: registerWithEmailSuccess,
  [Types.REGISTER_WITH_EMAIL_FAILURE]: registerWithEmailFailure,

  [Types.NEW_AD_ATTEMPT]: newAdAttempt,
  [Types.NEW_AD_SUCCESS]: newAdSuccess,
  [Types.NEW_AD_FAILURE]: newAdFailure,

  [Types.SAVE_AD_TO_USER_AD_LIST_ATTEMPT]: saveAdToUserAdListAttempt,
  [Types.SAVE_AD_TO_USER_AD_LIST_SUCCESS]: saveAdToUserAdListSuccess,
  [Types.SAVE_AD_TO_USER_AD_LIST_FAILURE]: saveAdToUserAdListFailure,

  [Types.TOGGLE_SIDE_MENU]: toggleSideMenu
});

