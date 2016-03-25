import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/actions.jsx';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FeedbackTab from './FeedbackTab.jsx';


function DiscussionSection ({addComment, comments, currentUser, currentVideo}) {

  return (
    <Tabs>
      <Tab label="Feedback">
        <FeedbackTab addComment={addComment} comments={comments} currentVideo={currentVideo} currentUser={currentUser}/>
      </Tab>
      <Tab label="Q&A">

      </Tab>
    </Tabs>
  )
}


const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    questions: state.questions,
    currentVideo: state.currentVideo,
    currentUser: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment, videoID, userID) => {
      console.log('Adding Feedback!');
      dispatch(addComment(comment, videoID, userID));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscussionSection);