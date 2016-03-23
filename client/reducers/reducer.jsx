import { combineReducers } from 'redux'
import $ from 'jquery';
import {reducer as formReducer} from 'redux-form';

const CurrentVideo = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_VIDEO':
      return action.data;
    default:
      return state;
  }
}

const VideoList = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_VIDEOS':
      return action.videos;
    default:
      return state; 
  }
}

// const Video = (state = {}, action) => {
//   var news = Object.assign({}, state);
//   switch (action.type) {
//     case 'RECEIEVED_VIDEOS':
//       console.log("from reducer received: ",action.videos);
//       news.found = action.videos;
//       console.log("news.found.title is", news.found.title )
//         return news.found;
//     default:
//       return state; 
//   }
// }

const UserInfo = (state = {}, action) => {
  var newstate = Object.assign({}, state);
  switch (action.type) {
    case 'UPDATE_USER_INFO':
      newstate.user = action.info;
    case 'UPDATE_ABOUTME':
      newstate.userInfo.aboutMe = action.info;
      newstate.userInfo.aboutMeEdit = false;
      console.log("aboutme in reducer:", newstate.userInfo.aboutMe);
      return newstate.userInfo;
    default:
      return state;
  }
}

const User = (state = {}, action) => {
  switch(action.type) {
    case 'CHANGE_USER':
      return action.user;
    default:
      return state;
  }
}

const SignInModal = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_SIGNIN_MODAL':
      return true;
    case 'HIDE_SIGNIN_MODAL':
      return false;
    default:
      return state;
  }
}

const SignUpModal = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_SIGNUP_MODAL':
      return true;
    case 'HIDE_SIGNUP_MODAL':
      return false;
    default:
      return state;
  }
}

const Comments = (state = {}, action) => {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'LOAD_COMMENTS':
      console.log('inside load comments reducer for: ',action.payload);
      //DB query to fetch comments for specified video
      newState.comments = [{user:"Rohit", postedAt:"0000", content:"This is a test comment."}];
      return newState;
    case 'ADD_COMMENT':
      console.log("Adding comment from reducer");
      //DB query to insert comment
      return newState;
    default:
      return state;  
  }
}

const VideoAppHandler = combineReducers({
  currentVideo: CurrentVideo,
  videos: VideoList,
  form: formReducer,
  videos: VideoList,
  user: User,
  comments: Comments,
  displaySignInModal: SignInModal,
  displaySignUpModal: SignUpModal,
  userInfo: UserInfo
});

export default VideoAppHandler;