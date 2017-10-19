import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  fetchUserAttempt: [],
  fetchUserSuccess: ['data'],
  fetchUserFailure: ['error'],

  loginUserAttempt: [],
  loginUserSuccess: ['data'],
  loginUserFailure: ['error'],

  logoutUserAttempt: [],
  logoutUserSuccess: [],
  logoutUserFailure: ['error'],

  registerWithEmailAttempt: [],
  registerWithEmailSuccess: ['data'],
  registerWithEmailFailure: ['error'],

  newAdAttempt: [],
  newAdSuccess: [],
  newAdFailure: ['err'],

  saveAdToUserAdListAttempt: [],
  saveAdToUserAdListSuccess: [],
  saveAdToUserAdListFailure: ['err'],
});
