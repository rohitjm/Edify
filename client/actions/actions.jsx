import $ from 'jquery';

export const changeCurrentVideo = (value) => {
  return {
    type: 'CHANGE_VIDEO',
    value: value
  };
};

export const receivedVideoList = (videos) => {
  return {
    type: 'RECEIEVED_VIDEOS',
    videos:videos
  }
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
		dispatch(fetchVideoList());
		$.get('/fetch')
		.then((response) => 
			{
				console.log("from action: ",response);
				dispatch(receivedVideoList(response));
			});
	}
};

export const changeUser = (user) => {
  return {
    type: 'CHANGE_USER',
    user: user
  }
};

export const signInUser = (user) => {
  return $.post('/signin', user)
    .then((response) => 
      {
        // not sure what this request returns (using user from input just in case it's not the user object)
        console.log("from action: ", response);
        dispatch(changeUser(user));
      });
};



