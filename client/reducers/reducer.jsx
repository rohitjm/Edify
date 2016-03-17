import { combineReducers } from 'redux'
import $ from 'jquery';
import {reducer as formReducer} from 'redux-form';

const CurrentVideo = (state = "a", action) => {
  switch (action.type) {
    case 'CHANGE_VIDEO':
    console.log(action.value);
      return action.value
    default:
      return state;
  }
}

const VideoList = (state = {}, action) => {
	var newState = Object.assign({},state);
	switch (action.type) {
		case 'FETCH_VIDEOS':
			console.log("fetching videos");
      newstate.videos = action.videos;
			return newstate;
		default:
			return newState;	
	}

const Video = (state = {}, action) => {
  var news = Object.assign({},state);
  switch (action.type) {
    case 'RECEIEVED_VIDEOS':
      console.log("from reducer received: ",action.videos);
      news.found = action.videos;
      console.log("news.found.title is", news.found.title )
        return news.found;
    default:
      return state; 
  }
} 

const VideoAppHandler = combineReducers({
  currentVideo: CurrentVideo,
  videos:VideoList,
  found: Video,
  form: formReducer

const User = (state = {}, action) => {
  var newState = Object.assign({},state);
  switch(action.type) {
    case 'CHANGE_USER':
      console.log('from reducer: ', action.user);
      newState.user = action.user;
    default:
      return newState;
  }
}

const VideoAppHandler = combineReducers({
  currentVideo: CurrentVideo,
  videos: VideoList,
  user: User
});

export default VideoAppHandler;