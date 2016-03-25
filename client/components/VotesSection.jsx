import React, {Component} from 'react';
import { connect } from 'react-redux';
import { upVote, downVote } from '../actions/actions.jsx'
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';


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
      console.log("from up container");
      dispatch(upVote(userID, videoID));
    },
    downVote: (userID, videoID) => {
      console.log("from down container");
      dispatch(downVote(userID, videoID));
    }   
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VotesSection);