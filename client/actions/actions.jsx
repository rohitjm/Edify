import $ from 'jquery';

export const changeCurrentVideo = (value) => {
  return {
    type: 'CHANGE_VIDEO',
    value: value
  };
};

export const requestVideoList = () => {
  return {
    type: 'REQUEST_VIDEOS',
  };
};

export const receivedVideoList = (videos) => {
  return {
    type: 'RECEIEVED_VIDEOS',
    videos:videos
  };
};   

export const fetchVideoList = (videos) => {
  return {
    type: 'FETCH_VIDEOS',
    videos: videos
  };
};

export const getVideo = (data) => {
  return {
    type: 'GET_VIDEOS',
    data: data
  };
};

export const videoFetch = () => {
	return(dispatch) => {
		dispatch(requestVideoList());
		$.get('/fetch')
		.then((response) => 
			{
				console.log("from action: ",response);
				dispatch(receivedVideoList(response));
			});
	}
};


