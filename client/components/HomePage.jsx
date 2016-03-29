import React, {Component} from 'react';
import { connect } from 'react-redux';
import Featured from './Featured.jsx';
import VideoGrid from './VideoGrid.jsx';
import CategoriesBar from './CategoriesBar.jsx';
import { fetchVideoList, loadCategories } from '../actions/actions.jsx';
import $ from 'jquery';

//Component Code
export class HomePage extends Component {

	componentDidMount(){
    this.props.fetchVideos();
    this.props.fetchCategories();
	}

  render(){
  	//this.props.fetchVideos();
  	return (
  	  <div id = "HomePage">
  	  	<div id = 'box'><Featured /></div>
        <CategoriesBar />
    	  <VideoGrid />
  	  </div>
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
    fetchVideos: () => {
      $.get('/fetch')
      .done(function(res){
         dispatch(fetchVideoList(res));
      });
    },
    fetchCategories: () => {
      dispatch(loadCategories())
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);


