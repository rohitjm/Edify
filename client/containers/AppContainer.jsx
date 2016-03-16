import React, { Component } from 'react';
import Header from './HeaderContainer.jsx';
import Featured from './FeaturedContainer.jsx';
import VideoGrid from './VideoGridContainer.jsx';
import { SearchContainer } from './SearchContainer.jsx';
import { MainVideoListContainer } from './MainVideoListContainer.jsx';
import VideoPlayer from '../components/Main/VideoPlayer.jsx'

export default class AppContainer extends Component {

  render(){
    return (
      <div id="app-view">
        <Header />
        <Featured />
        <VideoGrid />
        <VideoPlayer />
      </div>
    );
  }
}
