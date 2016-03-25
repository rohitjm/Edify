import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addComment, addQuestion, showAnswerEdit, hideAnswerEdit } from '../actions/actions.jsx';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FeedbackTab from './FeedbackTab.jsx';
import Q_ATab from './Q_ATab.jsx';


class DiscussionSection extends Component {

  render() {
    return (
      <Tabs>
        <Tab label="Feedback">
          <FeedbackTab addComment={this.props.addComment}
            comments={this.props.comments}
            currentVideo={this.props.currentVideo}
            currentUser={this.props.currentUser}
          />
        </Tab>
        <Tab label="Q&A">
          <Q_ATab addQuestion={this.props.addQuestion}
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
    comments: state.comments,
    questions: state.questions,
    currentVideo: state.currentVideo,
    currentUser: state.user,
    answerEdit: state.answerEdit
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