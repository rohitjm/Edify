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
    console.log(feedback);


    // Feedback is initially an empty object (before becoming an array of 
    // feedback objects) so it must be verified as an array before trying to map it
    if (Array.isArray(feedback)) {
      feedbackFound = (
      <div>
        {feedback.map(function (singleFeedback){
          return(
            <div>
              <hr/>
              <h4 style={{fontFamily: 'Raleway', margin: '0px', marginLeft: '50px', fontSize: '20px', color: '#303F9F'}}> {singleFeedback.username} </h4>
              <h3 style={{fontFamily: 'Raleway', margin: '0px', marginLeft: '50px'}}> {singleFeedback.feedback} </h3>
            </div>
          ); 
        })}
      </div>
      );
    }

    return (
      <div className='feedback'>
        <TextField
          hintText="Enter feedback..."
          multiLine={true}
          rowsMax={5}
          ref='feedback'
          underlineShow={false}
          style={{fontFamily: 'Raleway', backgroundColor: '#f0f0f5', paddingLeft: '7px', height: '100px', width: '525px', marginLeft: '50px', marginTop: '25px'}} hintStyle={{paddingTop: '4px', height: '19px'}}
        />
        <br/>
        <RaisedButton label="Submit" style={{marginLeft: '490px'}} labelColor='#f0f0f5' backgroundColor='#ff4f1a' onClick={() => addFeedback(this.refs.feedback.getValue(), username, videoid, userid)}/>
        {feedbackFound}
      </div>
    )
  };
}
