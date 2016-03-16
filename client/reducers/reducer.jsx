import { combineReducers } from 'redux'

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
		case 'FETCH_VIDEOS':
			console.log("fetching videos");
			newstate.videos = [
				{
					title:"Weird rabbit video",
					description:"Some animals gang up on a rabbit",
					thumbnail:"http://dndm6u438fnmq.cloudfront.net/bunny50MB.jpg",
					url:"http://dndm6u438fnmq.cloudfront.net/bunny50MB.mp4"
				},
				{
					title:"Lego Vid",
					description:"Random lego video",
					thumbnail:"http://dndm6u438fnmq.cloudfront.net/lego.jpg",
					url:"http://dndm6u438fnmq.cloudfront.net/lego.mp4"
				},
				{
					title:"Toy Story",
					description:"Toys go on an adventure",
					thumbnail:"http://dndm6u438fnmq.cloudfront.net/toystory.jpg",
					url:"http://dndm6u438fnmq.cloudfront.net/toystory.mp4"
				}
			];
			return newstate;
		default:
			return newstate;	
	}
}

const VideoAppHandler = combineReducers({
  currentVideo: CurrentVideo,
  videos:VideoList
});

export default VideoAppHandler;