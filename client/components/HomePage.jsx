import React, {Component} from 'react';
import AuthBox from './AuthBox.jsx';
import SearchBar from './SearchBar.jsx';
import {receivedVideoList} from '../actions/actions.jsx'
import {connect} from 'react-redux';
import $ from 'jquery';


export default class Header extends Component {
  
  handleSubmit(data) {
    var self = this;
    console.log('Submission received!:', data.firstName);
    console.log("propsis", this.props)
    $.post('/search', data.firstName).done(function(res){
      self.props.dispatch(receivedVideoList(res))
    })
  }

  render(){
  	return (
  	  <div id = "header">
  	  	<div id = 'box'><SearchBar onSubmit={this.handleSubmit.bind(this)}/></div>
				<div id = 'box'><AuthBox /></div>
        {this.props.found ? this.props.found.title : null}
  	  </div>
  	);
  }
}
export default connect()(Header);