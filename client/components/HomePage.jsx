import React, {Component} from 'react';
import AuthBox from './AuthBox.jsx';
import SearchBar from './SearchBar.jsx';
import {getVideo} from '../actions/actions.jsx'

  handleSubmit(data) {
    console.log('Submission received!:', data);
    console.log("propsis", this.props)
    this.props.dispatch(getVideo(data.firstname));
  }
export default class Header extends Component {

  render(){
  	return (
  	  <div id = "header">
  	  	<div id = 'box'><SearchBar onSubmit={this.handleSubmit.bind(this)}/></div>
				<div id = 'box'><AuthBox /></div>
  	  </div>
  	);
  }
}
