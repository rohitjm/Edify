import React, {Component} from 'react';
import SearchBar from './SearchBar.jsx';
import {fetchVideoList, toggleSignInModal, toggleSignUpModal, toggleUploadModal, signOutUser} from '../actions/actions.jsx'
import {connect} from 'react-redux';
import $ from 'jquery';
// import {ToolBar, ToolBarSeparator} from 'material-ui';
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
    signOut: () => {
      console.log('Signing out user')
      dispatch(signOutUser())
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
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true} float="left">
          <ToolbarTitle text="Virtuoso" style={{cursor: 'pointer'}} onClick={() => this.props.goHome()}/>
        </ToolbarGroup>
        <ToolbarGroup float="right">
          <ToolbarSeparator />
          <RaisedButton label="Sign In" primary={true} onTouchTap={() => this.props.showSignInModal()}/>
          <RaisedButton label="Sign Up" primary={true} onTouchTap={() => this.props.showSignUpModal()}/>
          <RaisedButton label="Sign Out" primary={true} onTouchTap={() => this.props.signOut()}/>
          <RaisedButton label="Upload Video" secondary={true} onTouchTap={() => this.props.showUploadModal()}/>
        </ToolbarGroup>
        <ToolbarGroup float="right" style={{width: "35%"}}>
          <SearchBar handleSubmit={this.props.handleSubmit}/>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

        // <div className='navLeft'>
        //   <h1 className='logo navContent'>Virtuoso</h1>
        // </div>
        // <div className='navMiddle'>
        //   <div className='searchBar navContent'><SearchBar onSubmit={this.props.handleSubmit.bind(this)}/></div>
        // </div>
        // <div className='navRight'>
        //   <div className='authBox navContent'><AuthBox /></div>
        // </div>