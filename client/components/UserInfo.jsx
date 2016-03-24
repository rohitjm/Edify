import React, {Component} from 'react';
import { connect } from 'react-redux';

export default function UserInfo ({user, updateUserInfo}) {

  

    var aboutMeEdit = <form className="aboutMeForm">
                        <textarea className="aboutMe" ref="aboutMe" >{user.aboutMe}</textarea>
                       <button type="button" className="aboutMeSubmitButton" onClick={() => updateUserInfo(this.refs.aboutMe.value, this.props.user)}>
                          Save Changes
                        </button>
                      </form>
    var aboutMe = <div className="aboutMe" onClick={ () => updateUserInfo(null,user) }>hey {user.aboutMe}</div>
    return (
      <div className='aboutMeParentContainer'>
        <div className='welcomeBackTitle'>Welcome Back, {user.username}</div>
        <div className='profilePicture'></div>
        <div className="aboutMeContainer">
          {user.aboutMeEdit ? aboutMeEdit : aboutMe}
        </div>
      </div>
    )
}
 