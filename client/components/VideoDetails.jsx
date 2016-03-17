// props assumed to be: currentVideo state:
// this.props.state.currentVideo = {
//    title: xxxxxx,
//    description: xxxxxxx,
//    url: xxxxxxx,
//    cover: xxxxxxx
// }

import React, { Component } from 'react';

export default class VideoDetails extends Component {

  render(){
    return(
      <div id = "VideoDetails">
        <h2>{this.props.currentVideo.title}</h2>
        <p>{this.props.currentVideo.description}</p>
      </div>
    );
  }
}