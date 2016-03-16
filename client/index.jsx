import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import AppContainer from './containers/AppContainer.jsx';
import VideoAppHandler from './reducers/reducer.jsx'
import { createStore, getState, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxPromise from 'redux-promise'
import Greeting from "./greeting";
let store = createStore(VideoAppHandler, applyMiddleware(ReduxPromise, logger()));
// console.log(AppContainer);
ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
 document.getElementById('app')
);
