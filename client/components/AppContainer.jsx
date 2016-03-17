import React, { Component } from 'react';
import App from './App.jsx';
import { changeCurrentVideo , fetchVideoList} from '../actions/actions.jsx'
import { connect } from 'react-redux';
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

      $.get('/fetch')
      .done(function(res){
      	dispatch(fetchVideoList(res));
      });
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;