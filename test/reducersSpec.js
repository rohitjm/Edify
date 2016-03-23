import {expect} from 'chai';
import VideoAppHandler from '../client/reducers/reducer.jsx';

describe('reducer', () => {

  it('handles SELECT_VIDEO action', () => {
    const initialState = {};
    const action = {type: 'SELECT_VIDEO', data: {video: "Awesome Video"}};
    const nextState = VideoAppHandler(initialState, action);

    expect(nextState.currentVideo).to.deep.equal({video: "Awesome Video"});
    expect(initialState.currentVideo).to.equal(undefined);
  });

  it('handles FETCH_VIDEOS action', () => {
    const initialState = {};
    const action = {type: 'FETCH_VIDEOS', videos: [{video: "Awesome Video 1"}, {video: "Awesome Video 2"}, {video: "Awesome Video 3"}] };
    const nextState = VideoAppHandler(initialState, action);

    expect(nextState.videos).to.deep.equal([{video: "Awesome Video 1"}, {video: "Awesome Video 2"}, {video: "Awesome Video 3"}]);
    expect(initialState.videos).to.equal(undefined);
  });

  it('handles CHANGE_USER action', () => {
    const initialState = {};
    const action = {type: 'CHANGE_USER', user: {name: 'The', password: 'Man'} };
    const nextState = VideoAppHandler(initialState, action);

    expect(nextState.user).to.deep.equal({name: 'The', password: 'Man'});
    expect(initialState.user).to.equal(undefined);
  });

  it('handles SHOW_SIGNIN_MODAL and HIDE_SIGNIN_MODAL actions', () => {
    const initialState_SHOW = {};
    const action_SHOW = {type: 'SHOW_SIGNIN_MODAL'};
    const nextState_SHOW = VideoAppHandler(initialState_SHOW, action_SHOW);

    const initialState_HIDE = {};
    const action_HIDE = {type: 'HIDE_SIGNIN_MODAL'};
    const nextState_HIDE = VideoAppHandler(initialState_HIDE, action_HIDE);

    expect(nextState_SHOW.displaySignInModal).to.deep.equal(true);
    expect(initialState_SHOW.displaySignInModal).to.equal(undefined);

    expect(nextState_HIDE.displaySignInModal).to.deep.equal(false);
    expect(initialState_HIDE.displaySignInModal).to.equal(undefined);
  });

  it('handles SHOW_SIGNUP_MODAL and HIDE_SIGNUP_MODAL actions', () => {
    const initialState_SHOW = {};
    const action_SHOW = {type: 'SHOW_SIGNUP_MODAL'};
    const nextState_SHOW = VideoAppHandler(initialState_SHOW, action_SHOW);

    const initialState_HIDE = {};
    const action_HIDE = {type: 'HIDE_SIGNUP_MODAL'};
    const nextState_HIDE = VideoAppHandler(initialState_HIDE, action_HIDE);

    expect(nextState_SHOW.displaySignUpModal).to.deep.equal(true);
    expect(initialState_SHOW.displaySignUpModal).to.equal(undefined);

    expect(nextState_HIDE.displaySignUpModal).to.deep.equal(false);
    expect(initialState_HIDE.displaySignUpModal).to.equal(undefined);
  });

});