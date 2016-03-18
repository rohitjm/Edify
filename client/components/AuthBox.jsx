import React, {Component} from 'react';
import {connect} from 'react-redux';
import { signInUser, signOutUser, signUpUser } from '../actions/actions.jsx';

export function AuthBox ({signIn, signOut, signUp, user}) {

  // the Log In and Sign Up buttons will trigger a modal where information is collected
  // modal will pop up when buttons are clicked and info will be obtained on submit

    return (
      <div id="AuthBox">
        <input id="username" type="text" placeholder="username"></input>
        <input id="password" type="text" placeholder="password"></input>
        <button onClick={function(){signIn()}} name="LogIn">Log In</button>
        <button onClick={function(){signOut()}} name="LogOut">Log Out</button>
        <button onClick={function(){signUp()}} name="SignUp">Sign Up</button>
        <button name="Upload">Upload Video</button>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // user obtained from pop up sign in modal should be formatted like {username: username, password: password}
    signIn: () => {
      var user = {};
      user.username = document.getElementById('username').value;
      user.password = document.getElementById('password').value;
      console.log('Signing in user')
      dispatch(signInUser(user));
    },
    signOut: () => {
      console.log('Signing out user')
      dispatch(signOutUser())
    },
    signUp: () => {
      console.log('in sign up function');
      var user = {};
      user.username = document.getElementById('username').value;
      user.password = document.getElementById('password').value;
      console.log("Signing up user")
      dispatch(signUpUser(user))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthBox);
