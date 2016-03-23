import React, {Component} from 'react';
import { connect } from 'react-redux';
import CommentSection from './CommentSection.jsx';
import { loadComments } from '../actions/actions.jsx';
import video from 'video.js';
import $ from 'jquery';

//Component Code
export class PlayerPage extends Component {

  componentDidMount(){
      console.log('willMount');
      this.props.loadComments(this.props.currentVideo.id);
  }

  render(){
    //this.props.fetchVideos();
    if(this.props.currentVideo){
      return (

        <div id = 'PlayerPage'>
          <div id = 'Playercover'>
            <video width='900' height='400' controls muted data-setup='{}'>
              <source src={this.props.currentVideo.url} type="video/mp4" />
            </video>
          </div>
          <div id = 'description'>
            <h3>Title: {this.props.currentVideo.title}</h3>
            <h4>Description: {this.props.currentVideo.description}</h4>
          </div>
         

        <div id = "Comments">
          <h2><CommentSection /></h2>
        </div>
        </div> 
      );
    } else {
      return (
        <h2>Player Page</h2>
      );   
    }
  }
}


//Container Code
const mapStateToProps = (state) => {
  return {
    currentVideo: state.currentVideo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadComments: (videoid) => {
      console.log("Loading comments from container..");
      dispatch(loadComments(videoid));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerPage);
