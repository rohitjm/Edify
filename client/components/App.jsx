import React, { Component } from 'react';
import { Header } from '../containers/HeaderContainer.jsx';
import { Featured } from '../containers/FeaturedContainer.jsx';
import { VideoGrid } from '../containers/VideoGridContainer.jsx';


export default class App extends Component {
// export default class App extends Component {
  // render () {
    // console.log(this.props.playVideo);

    componentWillMount(){
    	this.props.videoFetch();
    }

    render(){
    	console.log(this.props.videos);
	    return (
	      <div id="app-view">  
	       	{this.props.videos.videos[0]}
	      </div>
	    )	
    }
}
