import React, {Component} from 'react';
import NavigationContainer from 'NavigationContainer';
import SearchContainer from 'SearchContainer';
import MainVideoListContainer from 'MainVideoListContainer';

export class App extends Component{

  render(){
    return (
      <div>
        <h3>Inside App Container</h3>
      </div>
      <NavigationContainer/>
      <SearchContainer/>
      <!--Featured-->
      <MainVideoListContainer/>
    )
  }
}
