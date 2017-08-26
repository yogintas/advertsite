import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {
  userReadWrite,
  fetchAllAds,
  fetchAd,
} from './readWrite/reducer';
import userAuth from './userAuth/reducer';
import pagination from './pagination/reducer';
import filter from './filter/reducer';
import ad from './ad/reducer';


const reducersCombined = combineReducers({
  user: userAuth,
  userAds: userReadWrite,
  ads: fetchAllAds,
  ad,
  form: formReducer,
  pagination,
  filter
});

const store = createStore(
  reducersCombined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
