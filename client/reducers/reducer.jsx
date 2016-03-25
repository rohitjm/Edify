import { combineReducers } from 'redux'
import $ from 'jquery';

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


const User = (state = {}, action) => {
  var user = action.data;
  switch(action.type) {
    case 'CHANGE_USER':
      user = action.user;
      return user;
    case 'UPDATE_ABOUTME':
      user.aboutMe = action.data.aboutMe;
      return user;
    default:
      return state;
  }
}


const ToggleAboutMeEdit= (state = {}, action) => {
  switch(action.type) {
    case 'SHOW_EDIT':
      return true;
    case "HIDE_EDIT":
      return false;
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

const UploadModal = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_UPLOAD_MODAL':
      return true;
    case 'HIDE_UPLOAD_MODAL':
      return false;
    default:
      return state;
  }
}

const Comments = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_COMMENTS':
      return action.payload;
    default:
      return state;  
  }
}

const Categories = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_CATEGORIES':
      return action.categories;
    default:
      return state;  
  }
}

const VideoAppHandler = combineReducers({
  currentVideo: CurrentVideo,
  videos: VideoList,
  user: User,
  comments: Comments,
  categories: Categories,
  displaySignInModal: SignInModal,
  displaySignUpModal: SignUpModal,
  displayUploadModal: UploadModal,
  aboutMeEdit:ToggleAboutMeEdit
});

export default VideoAppHandler;