import React, { Component } from 'react';
import NavBar from './NavBar.jsx';

export default class App extends Component {
  componentWillMount(){
    console.log('willMount');
  	this.props.videoFetch();
  }

  render(){
  	console.log(this.props.videos.videos);
    return (
      <div id="app-view">  
       <h1 onClick = {() => this.props.playVideo('h')}> heyyy </h1>
       <div><NavBar/></div>
       {this.props.videos.videos ? this.props.videos.videos[0].title : null}
      </div>
    )	
  }
}
