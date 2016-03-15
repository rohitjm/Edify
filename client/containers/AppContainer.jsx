import React, { Component } from 'react';
import Header from './HeaderContainer.jsx';
import Featured from './FeaturedContainer.jsx';
import VideoGrid from './VideoGridContainer.jsx';
import { SearchContainer } from './SearchContainer.jsx';
import { MainVideoListContainer } from './MainVideoListContainer.jsx';
import Greeting from '../greeting.js';

export default class AppContainer extends Component {

  render(){
    return (
      <div id="app-view">
        <Header />
        <Featured />
        <VideoGrid />
        <Greeting name = "Hazal" />
      </div>
    );
  }
}
