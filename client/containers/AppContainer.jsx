import React, { Component } from 'react';
import App from '../components/App.jsx';
import { changeCurrentVideo} from '../actions/actions.jsx'
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    video: state.currentVideo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    playVideo: (value) => {
      console.log('I got called')
      dispatch(changeCurrentVideo(value));
    }
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;