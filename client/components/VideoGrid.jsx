import React, {Component} from 'react';
import { connect } from 'react-redux';
import VideoListEntry from './VideoListEntry.jsx';
import { changeCurrentVideo } from '../actions/actions.jsx';


//Component code
export function VideoGrid({ videos , selectVideo}) {
	
	if(videos){
		return (
			<div className = 'videoGrid'>
				{ videos.map(function(video){
						return <VideoListEntry video = {video} selectVideo = {selectVideo}/>;
				})}
			</div>	
		);	
	}else{
		return (
			<h2>No videos found</h2>
		)
	}
}

//Container Code
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
      window.location = '/#/player'
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoGrid);



