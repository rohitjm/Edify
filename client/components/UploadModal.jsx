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
    var videoIsValidated = this.props.videoIsValidated;
    var videoValidatedTrue = this.props.videoValidatedTrue;
    var videoValidatedFalse = this.props.videoValidatedFalse;
    var videoValidatedReset = this.props.videoValidatedReset;


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
        onClick={() => {
          closeModal();
          videoValidatedReset();
        }}
      />,
      <FlatButton
        label='Submit'
        disabled={videoIsValidated === true ? false : true}
        onClick={() => {
          submitVideo({title: this.refs.title.getValue(), description: this.refs.description.getValue(), cover: coverUrl, user: user, url: videoUrl, categoryId: categoryId});
          videoValidatedReset();
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
          Categories
          <DropDownMenu maxHeight={300}
            value={1}
            onChange={(evt, index, item) => {categoryId = item}}
            ref="category">
            {items}
          </DropDownMenu>
          <div><h4 className="uploadTitle">Video File (.mp4)</h4>
          <ReactS3Uploader  
            signingUrl="/s3/sign"
            onFinish={(videoResponse) => {
              var filename = videoResponse.filename;
              videoUrl = 'https://s3-us-west-1.amazonaws.com/video.bucket1/' + filename;
              startVideoDurationCheck(videoUrl, filename);
            }}
          /></div>
          {videoIsValidated === true ? 
            (<div><h4 className="uploadTitle">Thumbnail File (.jpg)</h4>
            <ReactS3Uploader  
              signingUrl="/s3/sign"
              onFinish={(coverResponse) => {
                console.log('cover response', coverResponse.filename)
                coverUrl = 'https://s3-us-west-1.amazonaws.com/video.bucket1/' + coverResponse.filename;
              }}
            /></div>) : videoIsValidated === false ?
            (<span>Your video was too long! Only videos under 5 minutes long may be uploaded. </span>)
            : ""}
        </Dialog>
        <div id='durationCheck' >
          {checking === true ?
          <VideoDurationValidater videoURL={videoURL}
           filename={filename} 
           stopVideoDurationCheck={stopVideoDurationCheck} 
           videoValidatedTrue={videoValidatedTrue}
           videoValidatedFalse={videoValidatedFalse}
           /> :
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