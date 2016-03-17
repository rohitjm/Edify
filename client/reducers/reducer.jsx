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
	var newstate = Object.assign({},state);
	switch (action.type) {
		// case 'RECEIEVED_VIDEOS':
		// 	console.log("from reducer received: ",action.videos);
		// 	newstate.videos = action.videos;
		case 'FETCH_VIDEOS':
			console.log("fetching videos");
      newstate.videos = action.videos;
			return newstate;

		default:
			return newstate;	
	}
}

const Video = (state = {}, action) => {
  var news = Object.assign({},state);
  switch (action.type) {
    case 'RECEIEVED_VIDEOS':
      console.log("from reducer received: ",action.videos);
      news.found = action.videos;
      console.log(news.found.title)
        return news;
    default:
      return state; 
  }
  } 

const VideoAppHandler = combineReducers({
  currentVideo: CurrentVideo,
  videos:VideoList,
  found: Video,
  form: formReducer
});

export default VideoAppHandler;