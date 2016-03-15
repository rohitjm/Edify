import React, {Component} from 'react';
import AuthBox from '../components/Header/AuthBox.jsx';
import SearchBar from '../components/Header/SearchBar.jsx';

export default class Header extends Component {

  render(){
  	return (
  	  <div id = "header">
  	  	<tr>
	  	  	<td><AuthBox /></td>
					<td><SearchBar /></td>
  	  	</tr>
  	  </div>
  	);
  }
}
