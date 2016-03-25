import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/actions.jsx';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';


export default class Q_ATab extends Component {

  render() {
    var questionsFound;
    var asker = this.props.currentUser.username;
    var videoid = this.props.currentVideo.id;
    var video_userid = this.props.currentVideo.UserId;
    var userid = this.props.currentUser.id;
    var addQuestion = this.props.addQuestion;
    var showAnswerEdit = this.props.showAnswerEdit;
    var hideAnswerEdit = this.props.hideAnswerEdit;
    var answerEdit = this.props.answerEdit;

    // Questions is initially an empty object (before becoming an array of 
    // comment objects) so it must be verified as an array before trying to map it
    if (Array.isArray(this.props.questions)) {
      questionsFound = (
      <div>
        {this.props.questions.map(function (question){
          return(
            <div>
              <div>
                <h3> {question.asker}: {question.question} </h3>
              </div>
              <div>
                <h3> {question.answer ? "A: "+question.answer : ""} </h3>
              </div>
              {/* If current user is creator of current video, answerEdit has been initialized (starts as an object, have to
                  check this before checking length), and the question isn't being edited currently, either the 'Edit' or 'Answer' 
                  button will render, based on if an answer already existed for the current question
               */}
              {
                (userid === video_userid && (typeof answerEdit === 'object' || answerEdit.length === 0)) ? (question.answer ?
                <RaisedButton label="Edit" onClick={() => showAnswerEdit(question.id)}/> :
                <RaisedButton label="Answer" onClick={() => showAnswerEdit(question.id)}/>) : ""
              }
              {
                answerEdit === question.id ? 
                (
                <div>
                  <TextField
                  defaultValue={question.answer ? question.answer : ""}
                  multiLine={true}
                  rows={1}
                  rowsMax={5}
                  ref='comment'
                  />
                  <RaisedButton label="Submit" />
                  <RaisedButton label="Cancel" onClick={() => hideAnswerEdit()}/>
                </div>) : ""
              }
            </div>
          ); 
        })}
      </div>
      );
    }

    return (
      <div>
        <TextField
          hintText="Enter a question..."
          multiLine={true}
          rows={1}
          rowsMax={5}
          ref='comment'
        />
        <RaisedButton label="Submit" onClick={() => addQuestion(this.refs.comment.getValue(), asker, videoid, userid)}/>
        {questionsFound}
      </div>
    )
  };
}