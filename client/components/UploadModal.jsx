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
      width: 350,
      maxWidth: 'none',
    };

    // add snackbar for when video is finished uploading?

    const actions = [
      <TextField
        ref="title"
        floatingLabelText="Title"
        id="title"
      />,
      <TextField
        ref="description"
        floatingLabelText="Description"
        type="description"
        id="description"
      />,
      <ReactS3Uploader  
        signingUrl="/s3/sign"
        onFinish={() => {
          // video file name must equal the title for now
          var url = 'http://dndm6u438fnmq.cloudfront.net/' + title + '.mp4'
          this.props.submitVideo({title: this.refs.title.getValue(), description: this.refs.description.getValue(), user: this.props.user.user, url: url})
        }}
      />,
      <FlatButton
        label='Cancel'
        secondary={true}
        onClick={this.props.closeModal}
      />
    ];

    return (
      <div>
        <Dialog
          title='Upload Video'
          actions={actions}
          modal={false}
          contentStyle={customContentStyle}
          open={this.props.displayUploadModal.displayUploadModal}
        >
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