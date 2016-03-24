import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchVideoList, updateAboutMe, aboutMeEdit, showAboutMeEdit, hideAboutMeEdit} from '../actions/actions.jsx';
import UserInfo from './UserInfo.jsx';
import VideoGrid from './VideoGrid.jsx';
import $ from 'jquery';


const mapStateToProps = (state) => {
  return {
    user: state.user,
    aboutMeEdit:state.aboutMeEdit,
    aboutMe: state.user.aboutMe,
    videos: state.videos
  }  
}

const mapDispatchToProps = (dispatch) => {
 
  return {
    updateUserInfo: function(info, user, aboutMeEdit) {
      
      if (aboutMeEdit === true) {
        $.post('/aboutMe', {info:info, username: user.username})
        .done(function(data){
          dispatch(updateAboutMe(data));
          dispatch(hideAboutMeEdit());
        })
      } else {
        dispatch(showAboutMeEdit())
      }

    },
    fetchUploadedVideos: function(user) {
      $.post('/fetch', user)
        .done(function(res){
          console.log("respondis", res)
           dispatch(fetchVideoList(res));
        });

    }
  }
}


export class ProfilePage extends Component {


componentDidMount(){
    this.props.fetchUploadedVideos(this.props.user);
}


render(){
console.log("useris:", this.props.user)
var aboutMeEdit = <form className="aboutMeForm">
                        <textarea className="aboutMe" ref="aboutMe" >{this.props.aboutMe}</textarea>
                       <button type="button" className="aboutMeSubmitButton" onClick={() => this.props.updateUserInfo(this.refs.aboutMe.value, this.props.user,this.props.aboutMeEdit)}>
                          Save Changes
                        </button>
                      </form>
    var aboutMe = <div className="aboutMe" onClick={ () => this.props.updateUserInfo(null,this.props.user,this.props.aboutMeEdit) }>hey {this.props.aboutMe}</div>
  
  return (
    <div>
 <div className='aboutMeParentContainer'>
        <div className='welcomeBackTitle'>Welcome Back, {this.props.user.username}</div>
        <div className='profilePicture'></div>
        <div className="aboutMeContainer">
          {this.props.aboutMeEdit === true ? aboutMeEdit : aboutMe}
        </div>
      </div>
      <div ><VideoGrid /></div>

  </div>
  );
}
}



   // <UserInfo user= {this.props.user}  updateUserInfo={this.props.updateUserInfo} />


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
