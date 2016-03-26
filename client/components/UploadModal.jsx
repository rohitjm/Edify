import React from 'react';
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

import { addVideo, hideUploadModal, loadCategories } from '../actions/actions.jsx';

export default class UploadModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const items = [];
    for (let i = 0; i < this.props.categories.length; i++) {
      items.push(<MenuItem value={this.props.categories[i].id} key={i} primaryText={this.props.categories[i].name}/>);
    }

    const style = {
      marginRight: 20,
    };

    const customContentStyle = {
      width: 500,
      maxWidth: 'none',
    };

    // add snackbar for when video is finished uploading?
    // add progress bar while video is uploading?

    let videoUrl;
    let coverUrl;
    let categoryId;

    const actions = [
      <ReactS3Uploader  
        signingUrl="/s3/sign"
        onFinish={(videoResponse) => {
          console.log('video response', videoResponse.filename)
          videoUrl = 'https://s3-us-west-1.amazonaws.com/video.bucket1/' + videoResponse.filename;
        }}
      />,
      <ReactS3Uploader  
        signingUrl="/s3/sign"
        onFinish={(coverResponse) => {
          console.log('cover response', coverResponse.filename)
          coverUrl = 'https://s3-us-west-1.amazonaws.com/video.bucket1/' + coverResponse.filename;
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
          console.log('submit button clicked')
          this.props.submitVideo({title: this.refs.title.getValue(), description: this.refs.description.getValue(), cover: coverUrl, user: this.props.user, url: videoUrl, categoryId: categoryId})
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
          <DropDownMenu maxHeight={300}
            value={'Category'}
            onChange={(evt, index, item) => {categoryId = item}}
            ref="category">
            {items}
          </DropDownMenu>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayUploadModal: state.displayUploadModal,
    user: state.user,
    categories: state.categories
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