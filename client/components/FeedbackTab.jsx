import React, {Component} from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';


export default class FeedbackTab extends Component {

  render() {
    var feedbackFound;
    var feedback = this.props.feedback;
    var addFeedback = this.props.addFeedback;
    var videoid = this.props.currentVideo.id;
    var username = this.props.currentUser.username;
    var userid = this.props.currentUser.id;


    // Feedback is initially an empty object (before becoming an array of 
    // feedback objects) so it must be verified as an array before trying to map it
    if (Array.isArray(feedback)) {
      feedbackFound = (
      <div>
        {feedback.map(function (singleFeedback){
          return(
            <div>
              <h3> {singleFeedback.content} </h3>
              <h4> {singleFeedback.userID} </h4>
            </div>
          ); 
        })}
      </div>
      );
    }

    return (
      <div>
        <TextField
          hintText="Enter feedback..."
          multiLine={true}
          rows={1}
          rowsMax={5}
          ref='feedback'
        />
        <RaisedButton label="Submit" onClick={() => addFeedback(this.refs.feedback.getValue(), username, videoid, userid)}/>
        {feedbackFound}
      </div>
    )
  };
}
