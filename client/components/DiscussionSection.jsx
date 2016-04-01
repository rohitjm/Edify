import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addFeedback, addQuestion, showAnswerEdit, hideAnswerEdit, addAnswer } from '../actions/actions.jsx';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FeedbackTab from './FeedbackTab.jsx';
import Q_ATab from './Q_ATab.jsx';


class DiscussionSection extends Component {

  render() {
    return (
      <Tabs
        className='tabs'
      >
        <Tab label="Feedback">
          <FeedbackTab addFeedback={this.props.addFeedback}
            feedback={this.props.feedback}
            currentVideo={this.props.currentVideo}
            currentUser={this.props.currentUser}
          />
        </Tab>
        <Tab label="Q&A">
          <Q_ATab addQuestion={this.props.addQuestion}
            addAnswer={this.props.addAnswer}
            questions={this.props.questions}
            currentVideo={this.props.currentVideo}
            currentUser={this.props.currentUser}
            showAnswerEdit={this.props.showAnswerEdit}
            hideAnswerEdit={this.props.hideAnswerEdit}
            answerEdit={this.props.answerEdit}
          />
        </Tab>
      </Tabs>
    )
  };
}


const mapStateToProps = (state) => {
  return {
    feedback: state.feedback,
    questions: state.questions,
    currentVideo: state.currentVideo,
    currentUser: state.user,
    answerEdit: state.answerEdit
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFeedback: (feedback, username, videoID, userID) => {
      dispatch(addFeedback(feedback, username, videoID, userID));
    },
    addQuestion: (question, asker, videoID, userID) => {
      dispatch(addQuestion(question, asker, videoID, userID));
    },
    addAnswer: (answer, questionID, videoID) => {
      dispatch(addAnswer(answer, questionID, videoID));
      dispatch(hideAnswerEdit());
    },
    showAnswerEdit: (questionID) => {
      dispatch(showAnswerEdit(questionID));
    },
    hideAnswerEdit: () => {
      dispatch(hideAnswerEdit());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscussionSection);