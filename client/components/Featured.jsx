import React, {Component} from 'react';
import { connect } from 'react-redux';

//Component Code
export default function Featured({currentVideo}) {
 	console.log(currentVideo);

	if(currentVideo){
	  return(
	  	<div id = 'Featured'>
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
    currentVideo: state.currentVideo.currentVideo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFeatured: (value) => {
      console.log('Selected video!');
      dispatch(changeCurrentVideo(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Featured);

