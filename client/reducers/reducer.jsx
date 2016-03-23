import { combineReducers } from 'redux'
import $ from 'jquery';
import {reducer as formReducer} from 'redux-form';

const CurrentVideo = (state = {}, action) => {
  var newstate = Object.assign({},state);
  switch (action.type) {
    case 'SELECT_VIDEO':
    	console.log(action.data);
      newstate.currentVideo = action.data;
      return newstate;
    default:
      return state;
  }
}

const VideoList = (state = {}, action) => {
	var newstate = Object.assign({}, state);
	switch (action.type) {
		case 'FETCH_VIDEOS':
			console.log("fetching videos:", action.videos);
      newstate.videos = action.videos;
      return newstate;
    case 'RECEIEVED_VIDEOS':
      console.log("from reducer received: ",action.videos);
      newstate.videos = action.videos;
      console.log("newstate.videos", newstate.videos )
      return newstate;

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
      return newstate;
    default:
      return state;
  }
}

const User = (state = {}, action) => {
  var newstate = Object.assign({},state);
  switch(action.type) {
    case 'CHANGE_USER':
      console.log('from reducer: ', action.user);
      newstate.user = action.user;
      return newstate;
    default:
      return state;
  }
}

const SignInModal = (state = false, action) => {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'SHOW_SIGNIN_MODAL':
    console.log(action.displaySignInModal)
      newState.displaySignInModal = true;
      return newState;
    case 'HIDE_SIGNIN_MODAL':
    console.log(action.displaySignInModal)
      newState.displaySignInModal = false;
      return newState;
    default:
      return state;
  }
}

const SignUpModal = (state = false, action) => {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'SHOW_SIGNUP_MODAL':
    console.log(action.displaySignUpModal)
      newState.displaySignUpModal = true;
      return newState;
    case 'HIDE_SIGNUP_MODAL':
    console.log(action.displaySignUpModal)
      newState.displaySignUpModal = false;
      return newState;
    default:
      return state;
  }
}

const Comments = (state = {}, action) => {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'LOAD_COMMENTS':
      console.log('inside load comments reducer for: ',action.payload);      
      newState.comments = action.payload;
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
  displaySignUpModal: SignUpModal
});

export default VideoAppHandler;