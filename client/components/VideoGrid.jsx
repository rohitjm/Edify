import React, {Component} from 'react';
import { connect } from 'react-redux';
import VideoListEntry from './VideoListEntry.jsx';

//Component code
export function VideoGrid({ videos }) {
	return (
		<div>
			{ videos.map(function(video){
					return <VideoListEntry video = {video} />;
			})}
		</div>	
	)
}

//Continaer Code
const mapStateToProps = (state) => {
  return {
    videos: state.videos.videos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectVideo: (value) => {
      console.log('Selected video!');
      dispatch(changeCurrentVideo(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoGrid);



