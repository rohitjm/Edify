import React, {Component} from 'react';
import AuthBox from './AuthBox.jsx';
import SearchBar from './SearchBar.jsx';
import {receivedVideoList} from '../actions/actions.jsx'
import {connect} from 'react-redux';
import $ from 'jquery';

const mapStateToProps = (state) => {
  return {
    state: state
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (data) => {
      $.post('/search', data).done(function(res){
        console.log("response is;", res);
        dispatch(receivedVideoList(res))
        window.location = '/#/search'
      })
    },
    goHome: () => {
      console.log('Going home');
      window.location = '/#/';
    }
  }
}
class NavBar extends Component {
  render(){
    return (
      <div id = "header">
        <div className = 'homeImage'><img src = "https://geographyiseasy.files.wordpress.com/2015/01/video-logo.jpg" onClick = {this.props.goHome.bind(this)} /></div>
        <div id = 'box'><SearchBar onSubmit={this.props.handleSubmit.bind(this)}/></div>
        <div id = 'box'><AuthBox /></div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

