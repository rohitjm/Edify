import React, {Component} from 'react';
import { connect } from 'react-redux';

export default class UserInfo extends Component {

  render() {
    var aboutMeEdit = <form className="aboutMeForm">
                        <textarea className="aboutMe" ref="aboutMe">{this.props.aboutMe}</textarea>
                       
                      </form>
    var aboutMe = <div className="aboutMe" onClick={ () => this.props.updateUserInfo() }>{this.props.aboutMe}</div>
    return (
      <div className='aboutMeParentContainer'>
        <div className='welcomeBackTitle'>Welcome Back, {this.props.user.user.username}</div>
        <div className='profilePicture'></div>
        <div className="aboutMeContainer">
          {this.props.aboutMeEdit ? aboutMeEdit : aboutMe}
        </div>
      </div>
    )
  }
}
 // <Button className="aboutMeSubmitButton" onClick={() => this.props.updateUserInfo()} bsSize='small' bsStye='defualt'>
                        //   Save Changes
                        // </Button>