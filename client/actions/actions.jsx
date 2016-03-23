import $ from 'jquery';

export const changeVideo = (value) => {
  return {
    type: 'CHANGE_VIDEO',
    value: value
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

export const updateUserInfo = (info) => {
  return {
    type: 'UPDATE_USER_INFO',
    info: info
  }
};
export const updateAboutMe = (data) => {
  return {
    type: 'UPDATE_ABOUTME',
    data:data
    
  }
};

export const aboutMeEdit = (data) => {
  return {
    type: 'EDIT_ABOUTME',
    data: data
   

  }
};
export const showAboutMeEdit = () => {
  return {
    type: 'SHOW_EDIT'
  }
};

export const hideAboutMeEdit = () => {
  return {
    type: 'HIDE_EDIT'
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
    .then((data) => 
      {
        console.log("from action: ", data);
        dispatch(changeUser(data));
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
    console.log("Iam here");
    $.post('/signup', user)
    .then((response) => 
      {
        console.log("from action: ", response);
        dispatch(changeUser(response));
      });
  }
};

export const addVideo = (video) => {
  console.log('in action - adding new video', video)
  return(dispatch) => {
    $.post('/addVideo', video)
    .then((response) => 
      {
        console.log("from action: ", response);
        dispatch(changeCurrentVideo(response));
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
  return(dispatch) => {
    $.post('/loadComments', {videoid:videoid})
    .then((comments) => 
      {
        dispatch(loadAllComments(comments));
      });
  }
};

export const loadAllComments = (comments) => {
  return {
    type: 'LOAD_COMMENTS',
    payload:comments
  }
};  

export const toggleUploadModal= () => {
  console.log('toggling UploadModal')
  return {
    type: 'SHOW_UPLOAD_MODAL',
  }
};

export const hideUploadModal= () => {
  console.log('toggling UploadModal')
  return {
    type: 'HIDE_UPLOAD_MODAL',
  }
};


export const addComment  = (comment, videoID, userID) => {
  var newComment = {
    content: comment,
    videoID: videoID,
    userID: userID
  };
  return(dispatch) => {
    $.post('/addComment', newComment)
    .then(() => 
      {
        dispatch(loadComments(videoID));
      });
  }
}


