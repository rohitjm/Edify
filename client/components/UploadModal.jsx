import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import {connect} from 'react-redux';
import ReactS3Uploader from 'react-s3-uploader';

import { addVideo, hideUploadModal } from '../actions/actions.jsx';

export default class UploadModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const style = {
      marginRight: 20,
    };

    const customContentStyle = {
      width: 500,
      maxWidth: 'none',
    };

    // add snackbar for when video is finished uploading?
    // add progress bar while video is uploading?

    const actions = [
      <ReactS3Uploader  
        signingUrl="/s3/sign"
        onFinish={() => {
        }}
      />,
      <ReactS3Uploader  
        signingUrl="/s3/sign"
        onFinish={() => {
        }}
      />,
      <FlatButton
        label='Cancel'
        secondary={true}
        onClick={this.props.closeModal}
      />,
      <FlatButton
        label='Submit'
        onClick={() => {
          // video file name must equal the title for now
          var videoUrl = 'http://dndm6u438fnmq.cloudfront.net/' + this.refs.title.getValue() + '.mp4'
          var photoUrl = 'http://dndm6u438fnmq.cloudfront.net/' + this.refs.title.getValue() + '.jpg'
          console.log('submit button clicked')
          this.props.submitVideo({title: this.refs.title.getValue(), description: this.refs.description.getValue(), cover: photoUrl, user: this.props.user, url: videoUrl})
        }}
      />
    ];

    return (
      <div>
        <Dialog
          title='Upload Video'
          actions={actions}
          modal={false}
          contentStyle={customContentStyle}
          open={this.props.displayUploadModal === true}
        >
        Select video (.mp4) and thumbnail (.jpg) files.
          <TextField
          ref="title"
          floatingLabelText="Title"
          id="title"
          />
          <TextField
            ref="description"
            floatingLabelText="Description"
            type="description"
            id="description"
          />
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayUploadModal: state.displayUploadModal,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // only handles adding the new video to the database; s3 uploader handles adding the video to s3
    submitVideo: (video) => {
      console.log('Submitting new video')
      dispatch(addVideo(video))
      dispatch(hideUploadModal())
    },
    closeModal: () => {
      dispatch(hideUploadModal())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadModal);