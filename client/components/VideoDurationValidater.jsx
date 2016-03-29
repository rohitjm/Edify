import React, {Component} from 'react';
import $ from 'jquery';

export default class VideoDurationValidater extends Component {

  componentDidMount() {
    var stopVideoDurationCheck = this.props.stopVideoDurationCheck;
    var filename = this.props.filename;
    var video, wrapper;
    wrapper = document.createElement('div');
    wrapper.innerHTML = "<video class='video-js vjs-default-skin' controls preload='auto' width='1' height='1'><source src='" + this.props.videoURL + "' type='video/mp4' /></video>";
    video = wrapper.firstChild;
    this.refs.target.getDOMNode().appendChild(video);
    var player = videojs(video, {}, function() {
      this.on('loadedmetadata', function() {
        if(this.duration() > 3) {
          $.post('/deleteVideoFromBucket', {filename: filename})
          .done(function() {
            console.log('IT WAS DELETED!!!!!!!');
          });
        } else {

        }
        stopVideoDurationCheck();
      });
    });
  }

  render() {
    return (
      
      <div>
        <h1>Validating video length</h1>
        <div ref="target" />
      </div>

    );
  }
}