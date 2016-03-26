import React, {Component} from 'react';
import { connect } from 'react-redux';
import { upVoteMore, downVoteMore } from '../actions/actions.jsx'
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import $ from 'jquery';


//Component Code
export default class VotesSection extends Component {

  render() {
    return (
      <div>
        <h3 onClick = {() => this.props.upVote(this.props.user.id, this.props.currentVideo.id)}>Up Vote: {this.props.currentVideo.upVotes} </h3>
        <h3 onClick = {() => this.props.downVote(this.props.user.id, this.props.currentVideo.id)}>Down Vote :  {this.props.currentVideo.downVotes} </h3>
      </div>
    );
  };
}

//Container Code
const mapStateToProps = (state) => {
  return {
    user: state.user,
    currentVideo: state.currentVideo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    upVote: (userID, videoID) => {
      var vote = {
        userID: userID,
        videoID:videoID
      };
      $.post('/upVote', vote)
      .then((voteCount) => 
      {
        console.log("from container: ",voteCount.upVotes);
        dispatch(upVoteMore(voteCount.upVotes));  
      });  
    },
    downVote: (userID, videoID) => {
      var vote = {
        userID: userID,
        videoID:videoID
      };
      $.post('/downVote', vote)
      .then((voteCount) => 
      {
        console.log("from container: ",voteCount.downVotes);
        dispatch(downVoteMore(voteCount.downVotes));  
      });  
    }   
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VotesSection);