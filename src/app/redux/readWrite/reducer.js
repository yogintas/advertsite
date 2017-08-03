import * as actionTypes from './types';

export function userReadWrite(state = {}, { type, ads }) {
  switch (type) {
    case actionTypes.FETCH_USER_ADS_SUCCESS:
      return ads ? ads : {}; //eslint-disable-line
    case actionTypes.FETCH_USER_ADS_FAILURE:
      return state;

    case actionTypes.CREATE_USER_AD_SUCCESS:
      return state;
    case actionTypes.CREATE_USER_AD_FAILURE:
      return state;

    case actionTypes.UPDATE_USER_AD_SUCCESS:
      return state;
    case actionTypes.UPDATE_USER_AD_FAILURE:
      return state;

    case actionTypes.DELETE_USER_AD_SUCCESS:
      return state;
    case actionTypes.DELETE_USER_AD_FAILURE:
      return state;

    case actionTypes.CLEAR_USER_ADS:
      return {};

    default:
      return state;
  }
}

export function fetchAllAds(state = {}, { type, ads }) {
  switch (type) {
    case actionTypes.FETCH_ADS_SUCCESS:
      return ads ? ads : {}; //eslint-disable-line
    case actionTypes.FETCH_ADS_FAILURE:
      return state;

    default:
      return state;
  }
}

export function fetchAd(state = {}, { type, ad }) {
  switch (type) {
    case actionTypes.FETCH_AD_SUCCESS:
      return ad ? ad : {}; //eslint-disable-line
    case actionTypes.FETCH_AD_FAILURE:
      return state;

    default:
      return state;
  }
}
