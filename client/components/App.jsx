import React, { Component } from 'react';
import { Header } from '../containers/HeaderContainer.jsx';
import { Featured } from '../containers/FeaturedContainer.jsx';
import { VideoGrid } from '../containers/VideoGridContainer.jsx';


export default class App extends Component {
// export default class App extends Component {
  // render () {
    // console.log(this.props.playVideo);

    componentWillMount(){
<<<<<<< HEAD
    	this.props.videoFetch();
=======
        console.log('willMount');
    	this.props.fetchVideos();
>>>>>>> 12b213e6156b031f7912f56622781538f26b815f
    }


    render(){
<<<<<<< HEAD
    	console.log(this.props.videos);
	    return (
	      <div id="app-view">  
	       	{this.props.videos.videos[0]}
=======
    	console.log(this.props.videos.videos);
	    return (
	      <div id="app-view">  
	       <h1 onClick = {() => this.props.playVideo('h')}> heyyy </h1>
	       {this.props.videos.videos ? this.props.videos.videos[0].title : null}
>>>>>>> 12b213e6156b031f7912f56622781538f26b815f
	      </div>
	    )	
    }
}
