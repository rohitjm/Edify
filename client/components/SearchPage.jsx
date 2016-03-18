
import React, {Component} from 'react';
import {connect} from 'react-redux';
import VideoListEntry from './VideoListEntry.jsx';

// import LogoBox from '../components/Header/LogoBox.jsx';
// import AuthBox from '../components/Header/AuthBox.jsx';
// import SearchBar from '../components/Header/SearchBar.jsx';
 const mapStateToProps = (state) => {
  return {
    found: state.found
  }
};


export default class SearchPage extends Component {
 
  render(){
    return (
      <div id = "">
      <VideoListEntry video ={this.props.found} />
      </div>
    );
  }
}
export default connect (mapStateToProps)(SearchPage);