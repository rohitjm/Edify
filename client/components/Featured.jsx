import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class Featured extends Component {

	render(){
	  return(
	  	<div id = 'Featured'>
	  		<h2>Featured</h2>
	  	</div>
	  )
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
    selectVideo: (value) => {
      console.log('Selected video!');
      dispatch(changeCurrentVideo(value));
    }
  };
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(VideoGrid);