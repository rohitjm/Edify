import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { updateAboutMe} from '../actions/actions.jsx';
import UserInfo from './UserInfo.jsx';



export class ProfilePage extends Component {
render(){
  return (
    <div>
    <UserInfo user= {this.props.user} updateUserInfo = {this.props.aboutMe} aboutMe ={this.props.aboutMe} />
  
  </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    aboutMe: state.userInfo.aboutMe
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


  


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
