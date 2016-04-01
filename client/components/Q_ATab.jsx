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
    * feedback objects) so it must be verified as an array before trying to map it
    */
    if (Array.isArray(questions)) {
      var _this = this;
      questionsFound = (
      <div>
        { questions.map(function (question){
          return(
            <div>
                <hr/>
                <h3 style={{fontFamily: 'Raleway', margin: '0px', marginLeft: '50px', fontSize: '20px', color: '#303F9F'}}> {question.asker} </h3>
                <h3 style={{fontFamily: 'Raleway', margin: '0px', marginLeft: '50px'}}> {question.question} </h3>
                <h4 style={{fontFamily: 'Raleway', margin: '0px', marginLeft: '85px', color: '#a6a6a6', fontStyle: 'italic'}}> {question.answer ? question.answer : ""} </h4>
              {/*
                If current user is creator of current video, and either answerEdit hasn't been set yet (starts as an object, have to
                check this before checking length) or the question isn't being edited currently, the 'Answer' (or 'Edit')
                button will render
              */}
              {
                (userid === video_userid && (typeof answerEdit === 'object' || answerEdit.length === 0)) ? (question.answer ?
                <RaisedButton label="Edit" style={{marginLeft: '490px'}} labelColor='#f0f0f5' backgroundColor='#ff4f1a' onClick={() => showAnswerEdit(question.id)}/> :
                <RaisedButton label="Answer" style={{marginLeft: '490px'}} labelColor='#f0f0f5' backgroundColor='#ff4f1a' onClick={() => showAnswerEdit(question.id)}/>) : ""
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
                  style={{marginLeft: '50px', width: '300px'}}
                  rowsMax={5}
                  ref='answer'
                  />
                  <RaisedButton label="Submit" style={{marginLeft: '45px'}} labelColor='#f0f0f5' backgroundColor='#ff4f1a'onClick={() => addAnswer(_this.refs.answer.getValue(), question.id, videoid)}/>
                  <RaisedButton label="Cancel" style={{marginLeft: '5px'}} labelColor='#f0f0f5' backgroundColor='#ff4f1a'onClick={() => hideAnswerEdit()}/>
                </div>) : ""
              }
            </div>
          ); 
        })}
      </div>
      );
    }

    return (
      <div className='feedback'>
        <TextField
          hintText="Enter a question..."
          multiLine={true}
          rowsMax={5}
          ref='question'
          underlineShow={false}
          style={{backgroundColor: '#f0f0f5', paddingLeft: '7px', height: '100px', width: '525px', marginLeft: '50px', marginTop: '25px'}} hintStyle={{paddingTop: '4px', height: '19px'}}
        />
        <RaisedButton label="Submit" style={{marginLeft: '490px'}} labelColor='#f0f0f5' backgroundColor='#ff4f1a' onClick={() => addQuestion(this.refs.question.getValue(), asker, videoid, userid)}/>
        {questionsFound}
      </div>
    )
  };
}