import $ from 'jquery';

export const changeVideo = (value) => {
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

export const updateUserInfo = (info) => {
  return {
    type: 'UPDATE_USER_INFO',
    info: info
  }
};

export const changeCurrentVideo = (video) => {
  return {
    type: 'SELECT_VIDEO',
    data: video
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
  return(dispatch) => {
    $.post('/signin', user)
    .then((response) => 
      {
        console.log("from action: ", response);
        dispatch(changeUser(response));
      });
  }
};

export const signOutUser = () => {
  return(dispatch) => {
    $.get('/signout')
    .then((response) => 
      {
        console.log("from action: ", response);
        dispatch(changeUser({}));
      });
  }
};

export const signUpUser = (user) => {
  return(dispatch) => {
    $.post('/signup', user)
    .then((response) => 
      {
        console.log("from action: ", response);
        dispatch(changeUser(response));
      });
  }
};

export const toggleSignInModal= () => {
  console.log('toggling SignInModal')
  return {
    type: 'SHOW_SIGNIN_MODAL',
  }
};

export const hideSignInModal= () => {
  console.log('toggling SignInModal')
  return {
    type: 'HIDE_SIGNIN_MODAL',
  }
};

export const toggleSignUpModal= () => {
  console.log('toggling SignUpModal')
  return {
    type: 'SHOW_SIGNUP_MODAL',
  }
};

export const hideSignUpModal= () => {
  console.log('toggling SignUpModal')
  return {
    type: 'HIDE_SIGNUP_MODAL',
  }
};

export const loadComments = (videoid) => {
  console.log('Load comments from action1', videoid);
  return(dispatch) => {
    $.post('/loadComments', {videoid:videoid})
    .then((comments) => 
      {
        console.log("fetched comments: ", comments);
        dispatch(loadAllComments(comments));
      });
  }
};

export const loadAllComments = (comments) => {
  console.log("Load comments from action2");
  return {
    type: 'LOAD_COMMENTS',
    payload: comments
  }
}

export const addComment  = (comment) => {
  console.log("Adding comment from actions");
  return {
    type: 'ADD_COMMENT'
  }
}

