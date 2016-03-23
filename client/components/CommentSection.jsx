import React, {Component} from 'react';
import { connect } from 'react-redux';

//Component Code
export default function CommentSection ({comments, addComment}) {

	console.log("From Component: ",comments);
	//map over the comments prop and display the comments for the selected video 
	return (
		<div id = 'CommentSection'>
			<h2>{comments[0].content}</h2>
		</div>
	) 
}

//Container Code
const mapStateToProps = (state) => {
  return {
    comments: state.comments.comments
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (value) => {
      console.log('Adding comment!');
      dispatch(changeCurrentVideo(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentSection);