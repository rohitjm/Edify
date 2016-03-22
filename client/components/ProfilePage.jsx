import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { updateAboutMe} from '../actions/actions.jsx';
import UserInfo from './UserInfo.jsx';



export class ProfilePage extends Component {
render(){
  console.log("useris", this.props.user.user.username);
  return (
    <div>
  <UserInfo user= {this.props.user}  />

  </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserInfo: function(info) {
      // info needs to be an object
      $.post('/aboutMe', info)
      .done(function () {
        console.log("Aboutme response:", res);
        dispatch(updateAboutMe(res))
      })
    }
  }
}

  // updateUserInfo = {this.props.aboutMe} aboutMe ={this.props.aboutMe}
  // aboutMe: state.userInfo.aboutMe
  


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
