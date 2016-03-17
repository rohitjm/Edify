import React, {Component} from 'react';

export default class AuthBox extends Component {

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
