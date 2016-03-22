import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import {connect} from 'react-redux';
import { signInUser, hideSignInModal, toggleSignInModal } from '../actions/actions.jsx';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const actions = [
      <TextField
        ref="username"
        floatingLabelText="Username"
        id="username"
      />,
      <TextField
        ref="password"
        floatingLabelText="Password"
        type="password"
        id="password"
      />,
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
          open={this.props.displaySignInModal.displaySignInModal}
        >
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

export default connect(mapStateToProps, mapDispatchToProps)(Test);