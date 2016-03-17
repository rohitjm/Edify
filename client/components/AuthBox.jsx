import React, {Component} from 'react';

// container

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // user obtained from pop up sign in modal should be formatted like {username: username, password: password}
    signIn: (user) => {
      console.log('Signing in user')
      dispatch(signInUser(user));
    }
  };
};

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

// component

export default class AuthBox extends Component {

  // the Log In and Sign Up buttons will trigger a modal where information is collected
  // modal will pop up when buttons are clicked and info will be obtained on submit

  render(){
  	return (
  	  <div id="AuthBox">
				<button name="LogIn">Log In</button>
        <button name="SignUp">Sign Up</button>
        <button name="LogOut">Log Out</button>
  	  </div>
  	);
  }
}
