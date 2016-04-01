import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import {connect} from 'react-redux';
import { signUpUser, hideSignUpModal, toggleSignUpModal } from '../actions/actions.jsx';

export default class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const customContentStyle = {
      width: 350,
      maxWidth: 'none',
    };

    const actions = [
      <FlatButton
        label='Cancel'
        style={{color: '#ff4f1a'}}
        onClick={this.props.closeModal}
      />,
      <FlatButton
        label='Submit'
        style={{color: '#303F9F'}}
        onClick={() => {
          this.props.signUp({username: this.refs.username.getValue(), password: this.refs.password.getValue()})
        }}
      />
    ];

    return (
      <div>
        <Dialog
          title='Sign Up'
          actions={actions}
          modal={false}
          contentStyle={customContentStyle}
          open={this.props.displaySignUpModal === true}
        >
          <TextField
          ref="username"
          floatingLabelText="Username"
          id="username"
          />
          <TextField
            ref="password"
            floatingLabelText="Password"
            type="password"
            id="password"
          />
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displaySignUpModal: state.displaySignUpModal,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => {
      console.log("Signing up user", user)

      dispatch(signUpUser(user))
      dispatch(hideSignUpModal())
    },
    closeModal: () => {
      dispatch(hideSignUpModal())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);