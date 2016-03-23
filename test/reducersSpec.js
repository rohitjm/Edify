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
});