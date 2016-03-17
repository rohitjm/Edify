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

class Header extends Component {
  handleSubmit(data) {
    var self = this;
    console.log('Submission received!:', data);
    $.post('/search', data).done(function(res){
      console.log("response is;", res);
      self.props.dispatch(receivedVideoList(res))
    })
  }
  render(){
    return (
      <div id = "header">
      <div id = 'box'><SearchBar onSubmit={this.handleSubmit.bind(this)}/></div>
        <div id = 'box'><AuthBox /></div>
      <div>
      {this.props.found ? this.props.found.titlesa: null}
      </div>
      </div>
    );
  }
}


export default connect(mapStateToProps)(Header);