import React, { Component } from 'react';
import App from '../components/App.jsx';
import { changeCurrentVideo , videoFetch} from '../actions/actions.jsx'
import { connect } from 'react-redux';
import Header from './HeaderContainer.jsx';
import Featured from './FeaturedContainer.jsx';
import VideoGrid from './VideoGridContainer.jsx';
import { SearchContainer } from './SearchContainer.jsx';
import { MainVideoListContainer } from './MainVideoListContainer.jsx';
import VideoPlayer from '../components/Main/VideoPlayer.jsx'
import $ from 'jquery';

const mapStateToProps = (state) => {
  return {
    video: state.currentVideo,
    videos: state.videos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    playVideo: (value) => {
      console.log('I got called')
      dispatch(changeCurrentVideo(value));
    },
    videoFetch: (data) => {
    	console.log("fetching videos!");
<<<<<<< HEAD
    	dispatch(videoFetch(data));
=======
      $.get('/fetch')
      .done(function(res){
      	dispatch(fetchVideoList(res));
      });
>>>>>>> 12b213e6156b031f7912f56622781538f26b815f
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;