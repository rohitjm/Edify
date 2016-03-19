import React, {Component} from 'react';
import { connect } from 'react-redux';
import Video from 'react-html5video';

  

//Component Code
export default function Featured({videos}) {
 	console.log(videos);

	if(videos){
    var vidLength = videos.length;
    var currentVideo = videos[Math.floor(Math.random()*vidLength)];

    return(
      <div id = 'Featured'>

        <div className = 'featuredImage'><img src = {currentVideo.cover} /></div>
        <h3>{currentVideo.title}</h3>
        <h4>{currentVideo.description}</h4>
      </div> 
    );   
	}else{
		return (
			<h2>Featured</h2>
		);
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
    changeFeatured: (value) => {
      console.log('Changing featured video!');
      dispatch(changeFeatured());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Featured);

