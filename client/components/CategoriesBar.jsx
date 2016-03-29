import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import {fetchVideoList} from '../actions/actions.jsx'

export default class CategoriesBar extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    return (

    <Toolbar
      style={{backgroundColor: '#388E3C'}}
    >
      <ToolbarGroup firstChild={true} float="left">
        <FlatButton label="Science" secondary={true} 
          onTouchTap={() => {this.props.searchByCategory(8)}} />
        <ToolbarSeparator />
        <FlatButton label="Arts" secondary={true} 
          onTouchTap={() => {this.props.searchByCategory(1)}} />
        <ToolbarSeparator />
        <FlatButton label="Business" secondary={true} 
          onTouchTap={() => {this.props.searchByCategory(12)}} />
        <ToolbarSeparator />
        <FlatButton label="Sports" secondary={true} 
          onTouchTap={() => {this.props.searchByCategory(14)}} />
        <ToolbarSeparator />
        <FlatButton label="Languages" secondary={true} 
          onTouchTap={() => {this.props.searchByCategory(3)}} />
        <ToolbarSeparator />
        <FlatButton label="Cooking" secondary={true} 
          onTouchTap={() => {this.props.searchByCategory(11)}} />
        <ToolbarSeparator />
        <FlatButton label="History" secondary={true} 
          onTouchTap={() => {this.props.searchByCategory(4)}} />
        <ToolbarSeparator />
      </ToolbarGroup>
      <ToolbarGroup float="right">
        <DropDownMenu
          onChange={(evt, index, item) => {this.props.searchByCategory(item)}}
        >
          <MenuItem value={2} primaryText="Literature" />
          <MenuItem value={5} primaryText="Music" />
          <MenuItem value={6} primaryText="Philosophy" />
          <MenuItem value={7} primaryText="Medicine" />
          <MenuItem value={9} primaryText="Engineering" />
          <MenuItem value={13} primaryText="Education" />
          <MenuItem value={10} primaryText="Mathematics" />
          <MenuItem value={15} primaryText="Other" />
        </DropDownMenu>
      </ToolbarGroup>
    </Toolbar>

  )

  }

};

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchByCategory: (categoryId) => {
      $.post('/search', {query: categoryId, queryType: 'CategoryId'}).done(function(res){
        dispatch(fetchVideoList(res))
        window.location = '/#/search'
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesBar);