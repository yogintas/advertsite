import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';

import auth from '../../../firebase/auth';
import db from '../../../firebase/db';
const { dbRef } = db;

import {
  fetchUserAdsSuccess,
  fetchUserAdsFailure,
  createUserAdSuccess,
  createUserAdFailure,
  // updateUserAdSuccess,
  // updateUserAdFailure,
  deleteUserAdSuccess,
  deleteUserAdFailure,
} from '../../../redux/readWrite/actionCreators';
import {
  loginUserFailure,
  loginUserSuccess,
} from '../../../redux/userAuth/actionCreators';

import NewAdForm from '../forms/NewAdForm';

import { createNewAd } from '../../../api';

console.log(loginUserFailure)

class User extends Component {
  constructor(props) {
    super(props);
    this.userAdsRef = '';
    this.userAdsListenerWasCalled = false;
    this.userAdsListener();
    this.createNewAd = this.createNewAd.bind(this);
    this.deleteAd = this.deleteAd.bind(this);
    this.loginWithFacebook = this.loginWithFacebook.bind(this);
  }

  componentDidUpdate() {
    this.userAdsListener();
  }

  componentWillUnmount() {
    this.userAdsRef === '' ? '':this.userAdsRef.off();
  }

  loginWithFacebook() {
    auth.loginWithProvider('facebook').then(
      snapshot => this.props.loginUserSuccess(snapshot.user),
      () => this.props.loginUserFailure(),
    )
  }

  userAdsListener() {
    if (this.props.user && this.props.user.uid !==undefined && !this.userAdsListenerWasCalled) {
      this.userAdsListenerWasCalled = true;
      this.userAdsRef = dbRef(`/user_ads/${this.props.user.uid}`);
      this.userAdsRef.on('value',
        snapshot => this.props.fetchUserAdsSuccess(snapshot.val()),
        () => this.props.fetchUserAdsFailure(),
      );
    }
  }

  createNewAd(values) {
    createNewAd(values, this.props.user.uid).then(
      () => this.props.createUserAdSuccess(),
      () => this.props.createUserAdFailure(),
    )
  }

  deleteAd(key) {
    const updates = {};
    updates[`/ads/${key}`] = null;
    updates[`/user_ads/${this.props.user.uid}/${key}`] = null;
    dbRef('/').update(updates).then(
      () => this.props.deleteUserAdSuccess(),
      () => this.props.deleteUserAdFailure(),
    );
  }

  userExists() {
    if (this.props.user) {
      return (
        <div>
          <div>Submit new Ad:</div>
          <NewAdForm onSubmit={this.createNewAd} />
        </div>
      );
    }
    return (
      <div>
        <div>Please login:</div>
        <button onClick={this.loginWithFacebook}>Facebook</button>
      </div>
    );
  }

  renderAds() {
    if (this.props.userAds) {
      const ads = this.props.userAds;
      return Object.keys(ads).map(key => (
        <div key={key}>
          {ads[key].name}
          <button onClick={() => this.deleteAd(key)}>Delete</button>
          <button onClick={() => this.updateAd(key)}>Update</button>
        </div>
      ));
    }
  }

  render() {
    return (
      <div>
        {this.userExists()}
        {this.renderAds()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loginUserFailure,
    loginUserSuccess,
    fetchUserAdsSuccess,
    fetchUserAdsFailure,
    createUserAdSuccess,
    createUserAdFailure,
    deleteUserAdSuccess,
    deleteUserAdFailure,
  }, dispatch);
}

function mapStateToProps({ user, userAds}) {
  return {
    user,
    userAds,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
