import React, {Component} from 'react';
import { connect } from 'react-redux';
import VideoPlayer from './VideoPlayer.jsx';
import VotesSection from './VotesSection.jsx';
import CommentSection from './CommentSection.jsx';
import DiscussionSection from './DiscussionSection.jsx';
import { loadComments } from '../actions/actions.jsx';
import video from 'video.js';
import $ from 'jquery';

//Component Code
export class PlayerPage extends Component {

  componentWillMount(){
      this.props.loadComments(this.props.currentVideo.id);
  }

  /**
  shouldComponentUpdate{

  }
  **/

  render(){
    //this.props.fetchVideos();
    if(this.props.currentVideo){
      return (

        <div id = 'PlayerPage'>
    
          <div><VideoPlayer currentVideo = {this.props.currentVideo}/></div>

          <div><VotesSection /></div>

        <div>
          <h2><DiscussionSection /></h2>
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
    currentVideo: state.currentVideo,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadComments: (videoid) => {
      dispatch(loadComments(videoid));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerPage);
