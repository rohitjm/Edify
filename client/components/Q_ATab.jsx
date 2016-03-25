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
    var userid = this.props.currentUser.id;
    var addQuestion = this.props.addQuestion;

    // Questions is initially an empty object (before becoming an array of 
    // comment objects) so it must be verified as an array before trying to map it
    if (Array.isArray(this.props.questions)) {
      questionsFound = (
      <div>
        {this.props.questions.map(function (question){
          return(
            <div>
              <h3> {question.question} </h3>
              <h4> {question.asker} </h4>
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