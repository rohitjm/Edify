import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import {connect} from 'react-redux';
import { signInUser, hideSignInModal, toggleSignInModal } from '../actions/actions.jsx';

export default class SignInModal extends React.Component {
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
        secondary={true}
        onClick={this.props.closeModal}
      />,
      <FlatButton
        label='Submit'
        onClick={() => {
          this.props.signIn({username: this.refs.username.getValue(), password: this.refs.password.getValue()})
        }}
      />
    ];

    return (
      <div>
        <Dialog
          title='Log In'
          actions={actions}
          modal={false}
          contentStyle={customContentStyle}
          open={this.props.displaySignInModal === true}
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
    displaySignInModal: state.displaySignInModal,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => {
      console.log('Signing in user')
      dispatch(signInUser(user))
      dispatch(hideSignInModal())
    
    },
    closeModal: () => {
      dispatch(hideSignInModal())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInModal);