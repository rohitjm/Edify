import React, {Component} from 'react';
import AuthBox from '../components/Header/AuthBox.jsx';
import SearchBar from '../components/Header/SearchBar.jsx';

export default class Header extends Component {

  render(){
  	return (
  	  <div id = "header">
		<AuthBox />
		<SearchBar />
  	  </div>
  	);
  }
}
