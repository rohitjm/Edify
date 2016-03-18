import React, {Component} from 'react';
import AuthBox from './AuthBox.jsx';
import SearchBar from './SearchBar.jsx';
import {receivedVideoList} from '../actions/actions.jsx'
import {connect} from 'react-redux';
import $ from 'jquery';

const mapStateToProps = (state) => {
  return {
    found: state.found
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
  }
}
}
class NavBar extends Component {
  render(){
    return (
      <div id = "header">
      <div id = 'box'><SearchBar onSubmit={this.props.handleSubmit.bind(this)}/></div>
      <div id = 'box'><AuthBox /></div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

