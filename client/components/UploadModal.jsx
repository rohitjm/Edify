import React, {Component} from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import {connect} from 'react-redux';
import ReactS3Uploader from 'react-s3-uploader';
import VideoDurationValidater from './VideoDurationValidater.jsx'

import { addVideo, hideUploadModal, loadCategories, startVideoDurationCheck, stopVideoDurationCheck } from '../actions/actions.jsx';
import { videoValidatedTrue, videoValidatedFalse, videoValidatedReset } from '../actions/actions.jsx';

export default class UploadModal extends Component {

  render() {
    var displayUploadModal = this.props.displayUploadModal;
    var user = this.props.user;
    var categories = this.props.categories
    var videoURL = this.props.checkVideoDuration.videoURL;
    var filename = this.props.checkVideoDuration.filename;
    var checking = this.props.checkVideoDuration.checking;
    var submitVideo = this.props.submitVideo;
    var closeModal = this.props.closeModal;
    var startVideoDurationCheck = this.props.startVideoDurationCheck;
    var stopVideoDurationCheck = this.props.stopVideoDurationCheck;


    const items = [];
    for (let i = 0; i < categories.length; i++) {
      items.push(<MenuItem value={categories[i].id} key={i} primaryText={categories[i].name}/>);
    }

    const style = {
      marginRight: 20,
    };

    const customContentStyle = {
      width: 330,
      maxWidth: 'none',
    };

    // add snackbar for when video is finished uploading?
    // add progress bar while video is uploading?

    let videoUrl;
    let coverUrl;
    let categoryId;

    const actions = [
      <FlatButton
        label='Cancel'
        secondary={true}
        onClick={closeModal}
      />,
      <FlatButton
        label='Submit'
        onClick={() => {
          submitVideo({title: this.refs.title.getValue(), description: this.refs.description.getValue(), cover: coverUrl, user: user, url: videoUrl, categoryId: categoryId})
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
          open={displayUploadModal === true}
        >
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
          Video File (.mp4)
          <ReactS3Uploader  
            signingUrl="/s3/sign"
            onFinish={(videoResponse) => {
              var filename = videoResponse.filename;
              videoUrl = 'https://s3-us-west-1.amazonaws.com/video.bucket1/' + filename;
              startVideoDurationCheck(videoUrl, filename);
            }}
          />
          Thumbnail File (.jpg)
          <ReactS3Uploader  
            signingUrl="/s3/sign"
            onFinish={(coverResponse) => {
              console.log('cover response', coverResponse.filename)
              coverUrl = 'https://s3-us-west-1.amazonaws.com/video.bucket1/' + coverResponse.filename;
            }}
          />
          Categories
          <DropDownMenu maxHeight={300}
            value={'Category'}
            onChange={(evt, index, item) => {categoryId = item}}
            ref="category">
            {items}
          </DropDownMenu>
        </Dialog>
        <div id='durationCheck' >
          {checking === true ?
          <VideoDurationValidater videoURL={videoURL} filename={filename} stopVideoDurationCheck={stopVideoDurationCheck} /> :
          ''}
        </div>
       </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayUploadModal: state.displayUploadModal,
    user: state.user,
    categories: state.categories,
    checkVideoDuration: state.checkVideoDuration,
    videoIsValidated: state.videoIsValidated
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
    },
    startVideoDurationCheck: (videoURL, filename) => {
      dispatch(startVideoDurationCheck(videoURL, filename));
    },
    stopVideoDurationCheck: () => {
      dispatch(stopVideoDurationCheck());
    },
    videoValidatedTrue: () => {
      dispatch(videoValidatedTrue());
    },
    videoValidatedFalse: () => {
      dispatch(videoValidatedFalse());
    },
    videoValidatedReset: () => {
      dispatch(videoValidatedReset());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadModal);