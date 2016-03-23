import React, {Component} from 'react';
import { connect } from 'react-redux';

//Component Code
export default function CommentSection ({comments, addComment}) {

	if(comments){
		return (
			<div id = 'CommentSection'>
				{comments.map(function (comment){
					return(
						<div id = "comment">
							<h3> {comment.content} </h3>
							<h4> {comment.userID} </h4>
						</div>
					); 
				})}
			</div>
		) 		
	} else {
			<div id = 'CommentSection'>
				<h3>No comments</h3>
			</div>
	}
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