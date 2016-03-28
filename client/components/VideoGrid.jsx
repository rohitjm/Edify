import React, {Component} from 'react';
import { connect } from 'react-redux';
import { changeCurrentVideo, addToWatch } from '../actions/actions.jsx';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';


//Component code
export function VideoGrid({ user,videos , selectVideo, addToWatch}) {
  const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
 
  },
  gridList: {
    width: 1200,
    height: 500,
    overflowY: 'auto',
    marginBottom: 15,
   
  },
};
	
	if(Object.keys(videos).length !== 0){
		return (
			<div id= "sheet" style={styles.root}>
        <GridList cellHeight={220} style={styles.gridList} cols= {4} padding= {5} >
				
        { videos.map(function(video){
          
          return <GridTile key = {video.cover} 
          title = {video.title} subtitle= {<span>by <b>{video.description}</b></span>} actionIcon={<IconButton onMouseDown = {() => addToWatch(video,user)} ><StarBorder color="white"/></IconButton>} >
          <img src={video.cover} onClick = {() => selectVideo(video)} /></GridTile>;
				
        })}
        </GridList>
			</div>	
		);	
	}else{
		return (
			<h2>No videos found</h2>
		)
	}
}
// onClick = {() => selectVideo(video)}

//Container Code
const mapStateToProps = (state) => {
  return {
    videos: state.videos,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectVideo: (value) => {
      console.log('Selected video!');
      dispatch(changeCurrentVideo(value));
      window.location = '/#/player'
    },
    addToWatch: (video,user) => {
      console.log("Saved");
      var info = {video: video, user: user}
      console.log("info is ", info);
       dispatch(addToWatch(info));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoGrid);

// onClick = {() => addToWatch(video,user)}
// video = {video} selectVideo = {selectVideo}

   // var style = {
   //    'backgroundImage': (`url('${currentVideo.cover}')`),
   //    'backgroundSize': 'cover',
   //    'backgroundRepeat': 'no-repeat',
   //    'backgroundPosition': '40%',
   //    'height': '100%'
   //  };