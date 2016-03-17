import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
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

          <div id = 'box'>
            <NavBar />
          </div>

          <div>
            <HomePage />
          </div>
        </div>
    )	
  }
}
