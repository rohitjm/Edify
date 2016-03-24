import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/actions.jsx';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FeedbackTab from './FeedbackTab';


function DiscussionSection ({addFeedback}) {

  return (
    <Tabs>
      <Tab label="Feedback">
        <FeedbackTab addFeedback={addFeedback}/>
      </Tab>
      <Tab label="Q&A">
        
      </Tab>
    </Tabs>
  )
}


const mapStateToProps = (state) => {
  return {
    feedback: state.feedback
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFeedback: (feedback, videoID, userID) => {
      console.log('Adding Feedback!');
      dispatch(addFeedback(feedback, videoID, userID));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscussionSection);