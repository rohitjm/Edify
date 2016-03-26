import React, {Component} from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';


export default class Q_ATab extends Component {

  render() {
    var questionsFound;
    var questions = this.props.questions;
    var asker = this.props.currentUser.username;
    var videoid = this.props.currentVideo.id;
    var video_userid = this.props.currentVideo.UserId;
    var userid = this.props.currentUser.id;
    var addQuestion = this.props.addQuestion;
    var addAnswer = this.props.addAnswer;
    var showAnswerEdit = this.props.showAnswerEdit;
    var hideAnswerEdit = this.props.hideAnswerEdit;
    var answerEdit = this.props.answerEdit;

    /*
    * This code block determines the structure and style of each question for a given video.
    * 'questions' is initially an empty object (before becoming an array of 
    * comment objects) so it must be verified as an array before trying to map it
    */
    if (Array.isArray(questions)) {
      var _this = this;
      questionsFound = (
      <div>
        { questions.map(function (question){
          return(
            <div>
              <div>
                <h3> {question.asker}: {question.question} </h3>
              </div>
              <div>
                <h3> {question.answer ? "A: "+question.answer : ""} </h3>
              </div>
              {/*
                If current user is creator of current video, and either answerEdit hasn't been set yet (starts as an object, have to
                check this before checking length) or the question isn't being edited currently, the 'Answer' (or 'Edit')
                button will render
              */}
              {
                (userid === video_userid && (typeof answerEdit === 'object' || answerEdit.length === 0)) ? (question.answer ?
                <RaisedButton label="Edit" onClick={() => showAnswerEdit(question.id)}/> :
                <RaisedButton label="Answer" onClick={() => showAnswerEdit(question.id)}/>) : ""
              }
              {/*
                If answerEdit is equal to the current question's id (user is 'Answer'ing this question) a text field with associated 'Submit'
                and 'Cancel' buttons will render underneath the question. Text field will be pre-populated with existing answer if one exists.
              */}
              {
                answerEdit === question.id ? 
                (<div>
                  <TextField
                  defaultValue={question.answer ? question.answer : ""}
                  multiLine={true}
                  rows={1}
                  rowsMax={5}
                  ref='answer'
                  />
                  <RaisedButton label="Submit" onClick={() => addAnswer(_this.refs.answer.getValue(), question.id, videoid)}/>
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
          ref='question'
        />
        <RaisedButton label="Submit" onClick={() => addQuestion(this.refs.question.getValue(), asker, videoid, userid)}/>
        {questionsFound}
      </div>
    )
  };
}