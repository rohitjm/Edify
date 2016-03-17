import React, { Component } from 'react';
import HomePage from './HomePage.jsx';

export default class App extends Component {
// export default class App extends Component {
  // render () {
    // console.log(this.props.playVideo);

  componentWillMount(){
    console.log('willMount');
  	this.props.videoFetch();
  }

  render(){
  	console.log(this.props.videos.videos);
    return (
        <div id="app-view">  
          <h1 onClick = {() => this.props.playVideo('h')}> heyyy </h1>
          {this.props.videos.videos ? this.props.videos.videos[0].title : null}

          <div>
            <HomePage />
          </div>
        </div>
    )	
  }
}
