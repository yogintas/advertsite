import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  setAdsFilter: ['filter'],
});
