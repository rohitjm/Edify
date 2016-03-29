import React, {Component} from 'react';
import { connect } from 'react-redux';
import { changeCurrentVideo } from '../actions/actions.jsx';
import Card from 'material-ui/lib/card/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
  

//Component Code
export default function Featured({videos, selectVideo}) {

	if(Object.keys(videos).length !== 0){
    var vidLength = videos.length;
    var currentVideo = videos[Math.floor(Math.random()*vidLength)];

    var videoOptions = {
      url: currentVideo.url,
      poster: currentVideo.cover
    };

	  return(
	  	
         <div id= 'inner'>
           <Card >
             <CardMedia onClick = {() => selectVideo(currentVideo)}
               overlay={<CardTitle title={currentVideo.title} subtitle={currentVideo.description} />}>
               <img src={currentVideo.cover} />
             </CardMedia>
           </Card>
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
    videos: state.videos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectVideo: (value) => {
      console.log('Selected video!');
      dispatch(changeCurrentVideo(value));
      window.location = '/#/player'
    },
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

