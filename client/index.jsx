import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import { createStore, getState, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import ReduxPromise from 'redux-promise'

let store = createStore(VideoAppHandler, applyMiddleware(ReduxPromise, thunk, logger()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('app')
);
