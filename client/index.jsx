import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer.jsx';
import VideoAppHandler from './reducers/reducer.jsx'
import { Provider } from 'react-redux';
import { createStore, getState, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxPromise from 'redux-promise'


let store = createStore(VideoAppHandler, applyMiddleware(ReduxPromise, logger()));

ReactDOM.render(
  <h3>From index.jsx</h3>
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
