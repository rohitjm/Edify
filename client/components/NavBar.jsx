import React, {Component} from 'react';
import SearchBar from './SearchBar.jsx';
import {fetchVideoList, toggleSignInModal, toggleSignUpModal, toggleUploadModal, signOutUser} from '../actions/actions.jsx'
import {connect} from 'react-redux';
import $ from 'jquery';
import FontIcon from 'material-ui/lib/font-icon';
import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import TextField from 'material-ui/lib/text-field';
import IconButton from 'material-ui/lib/icon-button';


const mapStateToProps = (state) => {
  return {
    state: state,
    displaySignInModal: state.displaySignInModal,
    displaySignOutModal: state.displaySignOutModal,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (query, queryType) => {
      $.post('/search', {query: query, queryType:queryType}).done(function(res){
        dispatch(fetchVideoList(res))
        window.location = '/#/search'
      })
    },
    goHome: () => {
      window.location = '/#/';
    },
    goProfile: () => {
      window.location = '/#/profile'
    },
    signOut: () => {
      console.log('Signing out user')
      dispatch(signOutUser())
      window.location = '/#/'
    },
    showSignInModal: () => {
      console.log('Showing SignInModal')
      dispatch(toggleSignInModal())
    },
    showSignUpModal: () => {
      console.log('Showing SignUpModal')
      dispatch(toggleSignUpModal())
    },
    showUploadModal: () => {
      console.log('Showing UploadModal')
      dispatch(toggleUploadModal())
    }
  };
}

class NavBar extends Component {

  render(){
  var noAuth =  <ToolbarGroup float="right">
                  <ToolbarSeparator />
                  <RaisedButton label="Sign In" primary={true} onTouchTap={() => this.props.showSignInModal()}/>
                  <RaisedButton label="Sign Up" primary={true} onTouchTap={() => this.props.showSignUpModal()}/>
                </ToolbarGroup>
  
  var Auth =    <ToolbarGroup float="right">
                  <ToolbarSeparator />
                  <RaisedButton label="Profile" secondary={true} onTouchTap={() => this.props.goProfile()}/>
                  <RaisedButton label="Upload Video" secondary={true} onTouchTap={() => this.props.showUploadModal()}/>
                  <RaisedButton label="Sign Out" primary={true} onTouchTap={() => this.props.signOut()}/>
                </ToolbarGroup>

    
    return (
      <Toolbar
        className="Nav"
      >
        <ToolbarGroup firstChild={true} float="left">
          <ToolbarTitle text="Virtuoso" style={{cursor: 'pointer'}} onClick={() => this.props.goHome()}/>
        </ToolbarGroup>
        <ToolbarGroup float="right" style={{width: "35%"}}>
          <ToolbarSeparator />
          <SearchBar handleSubmit={this.props.handleSubmit}/>
        </ToolbarGroup>
          {this.props.user.username !== undefined ? Auth : noAuth }
      </Toolbar>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
