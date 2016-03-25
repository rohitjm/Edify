import React, {Component} from 'react';

export default class VideoPlayer extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return nextState.currentVideo.url !== this.state.currentVideo.url;
  }

  render() {
    return (
      <div id = 'VideoPlayer'>  
        <div id = 'Playercover'>
          <video width='900' height='400' controls muted data-setup='{}'>
            <source src={this.props.currentVideo.url} type="video/mp4" />
          </video>
        </div>
          <div id = 'description'>
          <h3>Title: {this.props.currentVideo.title}</h3>
          <h4>Description: {this.props.currentVideo.description}</h4>
        </div>
      </div>  
    );
  }
}