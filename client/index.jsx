import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer.jsx';
import VideoAppHandler from './reducers/reducer.jsx'
import { Provider } from 'react-redux';
import { createStore, getState, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxPromise from 'redux-promise'


ReactDOM.render(
  <AppContainer />,
 document.getElementById('app'));
