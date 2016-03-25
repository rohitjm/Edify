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


export const updateAboutMe = (data) => {
  return {
    type: 'UPDATE_ABOUTME',
    data:data
    
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
        dispatch(changeUser(data));
      });
  }
};

export const signOutUser = () => {
  return(dispatch) => {
    $.get('/signout')
    .then((response) => 
      {
        dispatch(changeUser({}));
      });
  }
};

export const signUpUser = (user) => {
  return(dispatch) => {
    $.post('/signup', user)
    .then((response) => 
      {
        dispatch(changeUser(response));
      });
  }
};

export const addVideo = (video) => {
  return(dispatch) => {
    $.post('/addVideo', video)
    .then((response) => 
      {
        dispatch(changeCurrentVideo(response));
      });
  }
};

export const toggleSignInModal= () => {
  return {
    type: 'SHOW_SIGNIN_MODAL',
  }
};

export const hideSignInModal= () => {
  return {
    type: 'HIDE_SIGNIN_MODAL',
  }
};

export const toggleSignUpModal= () => {
  return {
    type: 'SHOW_SIGNUP_MODAL',
  }
};

export const hideSignUpModal= () => {
  return {
    type: 'HIDE_SIGNUP_MODAL',
  }
};

export const toggleUploadModal= () => {
  return {
    type: 'SHOW_UPLOAD_MODAL',
  }
};

export const hideUploadModal= () => {
  return {
    type: 'HIDE_UPLOAD_MODAL',
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

export const loadAllComments = (comments) => {
  return {
    type: 'LOAD_COMMENTS',
    payload:comments
  }
};  

export const upVote = (userID,videoID) => {
  var vote = {
    userID: userID,
    videoID:videoID
  };
  return(dispatch) => {
    $post('/upVote', vote)
    .then((voteCount) => 
    {
      dispatch(upVoteMore(voteCount));  
    });    
  }
}

export const upVoteMore = (voteCount) => {
  return{
    type:'UP_VOTE',
    payload:voteCount
  }
}

export const downVote = (userID,videoID) => {
  var vote = {
    userID: userID,
    videoID:videoID
  };
  return(dispatch) => {
    $post('/downVote', vote)
    .then((voteCount) => 
    {
      dispatch(upVoteMore(voteCount));  
    });    
  }
}

export const downVoteMore = (voteCount) => {
  return{
    type:'DOWN_VOTE',
    payload:voteCount
  }
}