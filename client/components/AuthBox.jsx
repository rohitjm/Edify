import React, {Component} from 'react';
import {connect} from 'react-redux';
import { toggleSignInModal, toggleSignUpModal, signOutUser } from '../actions/actions.jsx';

export function AuthBox ({showSignUpModal, showSignInModal, signOut, user}) {

  var isSignedIn = !!user.user;

  return (
    <div id="AuthBox">
      <div>
        <button onClick={function(){showSignInModal()}} name="LogIn">Log In</button>
        <button onClick={function(){showSignUpModal()}} name="Sign Up">Sign Up</button>
        <button onClick={function(){signOut()}} name="LogOut">Log Out</button>
      </div>
      <div>
        <button name="Upload">Upload Video</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    displaySignInModal: state.displaySignInModal,
    displaySignOutModal: state.displaySignOutModal,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      console.log('Signing out user')
      dispatch(signOutUser())
    },
    showSignInModal: () => {
      console.log('Showing SignInModal')
      dispatch(toggleSignInModal())
    },
    showSignUpModal: () => {
      console.log('Showing SignUpModal')
      dispatch(toggleSignUpModal())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthBox);
