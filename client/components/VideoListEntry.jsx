import React, { Component } from 'react';

export default class VideoListEntry extends Component {

  render(){

  	return(
  		<div className = "videoThumbnail">
  			<div className = 'image_thumbnail'></div>
  			<div className = 'image_title' onClick = {() => this.props.selectVideo()}>{this.props.video.title}</div>
  			<div className = 'image_description'>{this.props.video.description}</div>
  		</div>
  	);
  }
}


