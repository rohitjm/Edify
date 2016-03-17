import React, { Component } from 'react';

export default class VideoListEntry extends Component {

  render(){
  	
  	return(
  		<div id = "VideoThumbnail">
  			{this.props.video.cover}
  			{this.props.video.title}
  			{this.props.video.description}
  		</div>
  	);
  }
}
