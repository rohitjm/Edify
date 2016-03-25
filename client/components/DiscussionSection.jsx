import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addComment, addQuestion } from '../actions/actions.jsx';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FeedbackTab from './FeedbackTab.jsx';
import Q_ATab from './Q_ATab.jsx';


function DiscussionSection ({addComment, addQuestion, questions, comments, currentUser, currentVideo}) {

  return (
    <Tabs>
      <Tab label="Feedback">
        <FeedbackTab addComment={addComment} comments={comments} currentVideo={currentVideo} currentUser={currentUser}/>
      </Tab>
      <Tab label="Q&A">
        <Q_ATab addQuestion={addQuestion} questions={questions} currentVideo={currentVideo} currentUser={currentUser}/>
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
    },
    addQuestion: (question, asker, videoID, userID) => {
      dispatch(addQuestion(question, asker, videoID, userID));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscussionSection);