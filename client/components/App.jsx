import React, { Component } from 'react';
// import NavBar from 'NavBar.js';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';


export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
       
        {this.props.children}
      </div>
    )	
  }
}

render((
  // React Router allows user to access different pages, depending how
  // the window location is set.
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path='/search' component={Search} />
      <Route path='/player' component={Player} />
    </Route>
  </Router>
), document.getElementById('app'));


// =======Original working AppContainer component=======

// const mapStateToProps = (state) => {
//   return {
//     video: state.currentVideo,
//     videos: state.videos
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     playVideo: (value) => {
//       console.log('I got called')
//       dispatch(changeCurrentVideo(value));
//     },
//     fetchVideos: () => {
//      console.log("fetching videos!");
//       $.get('/fetch')
//       .done(function(res){
//          dispatch(fetchVideoList(res));
//       });
//     }
//   };
// };

// const AppContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);


// ======Original working App component========

// export default class App extends Component {

//     componentWillMount(){
//         console.log('willMount');
//         this.props.fetchVideos();
//     }


//     render(){
//         console.log(this.props.videos.videos);
//         return (
//           <div id="app-view">  
//            <h1 onClick = {() => this.props.playVideo('h')}> heyyy </h1>
//            {this.props.videos.videos ? this.props.videos.videos[0].title : null}
//           </div>
//         )   
//     }
// }