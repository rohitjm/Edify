import React, { Component } from 'react';
import Header from './HeaderContainer.jsx';
import Featured from './FeaturedContainer.jsx';
import VideoGrid from './VideoGridContainer.jsx';
import { SearchContainer } from './SearchContainer.jsx';
import { MainVideoListContainer } from './MainVideoListContainer.jsx';
import VideoPlayer from '../components/Main/VideoPlayer.jsx'

const videos = [
	{
		title:"Weird rabbit video",
		description:"Some animals gang up on a rabbit",
		thumbnail:"http://dndm6u438fnmq.cloudfront.net/bunny50MB.jpg",
		url:"http://dndm6u438fnmq.cloudfront.net/bunny50MB.mp4"
	},
	{
		title:"Lego Vid",
		description:"Random lego video",
		thumbnail:"http://dndm6u438fnmq.cloudfront.net/lego.jpg",
		url:"http://dndm6u438fnmq.cloudfront.net/lego.mp4"
	},
	{
		title:"Toy Story",
		description:"Toys go on an adventure",
		thumbnail:"http://dndm6u438fnmq.cloudfront.net/toystory.jpg",
		url:"http://dndm6u438fnmq.cloudfront.net/toystory.mp4"
	}
];

export default class AppContainer extends Component {

  render(){
    return (
      <div id="app-view">
        <Header />
        <Featured />
        <VideoGrid />
      </div>
    );
  }
}
