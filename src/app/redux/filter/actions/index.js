import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  filterByCategory: ['category'],
});
