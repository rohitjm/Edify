var Redux = require("redux");
var videoReducer = require("./reducers/videoReducer");
var initialState = require("./initialstate");
var thunk = require('redux-thunk'); // allows us to use asynchronous actions

var rootReducer = Redux.combineReducers({
  videos: videoReducer,   // this means heroReducer will operate on appState.heroes
});

module.exports = Redux.applyMiddleware(thunk)(Redux.createStore)(rootReducer,initialState());
