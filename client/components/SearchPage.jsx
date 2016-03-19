
import React, {Component} from 'react';
import {connect} from 'react-redux';
import VideoGrid from './VideoGrid.jsx';


export default class SearchPage extends Component {
 
  render(){
    return (
      <div id = "SearchPage">
      <div id = 'box'><VideoGrid /></div>
      </div>
    );
  }
}
export default connect ()(SearchPage);
