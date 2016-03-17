import React, {Component} from 'react';
import Featured from './Featured.jsx';
import VideoGrid from './VideoGrid.jsx';

export default class Header extends Component {

  render(){
  	return (
  	  <div id = "HomePage">
	  	<div id = 'box'><Featured /></div>
  	  	<div id = 'box'><VideoGrid /></div>
  	  </div>
  	);
  }
}
