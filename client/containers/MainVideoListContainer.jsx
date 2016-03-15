import React, {Component} from 'react';
import VideoListEntry from '../Main/VideoListEntry.jsx';

export class MainVideoListCont extends Component {

  render(){
    return (
      <VideoListEntry videos = {this.props.videos} />
    )
  }
}
