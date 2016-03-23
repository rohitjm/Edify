import {expect} from 'chai';
import VideoAppHandler from '../client/reducers/reducer.jsx';

describe('reducer', () => {

  it('handles SELECT_VIDEO', () => {
    const initialState = {};
    const action = {type: 'SELECT_VIDEO', data: {video: "Awesome Video"}};
    const nextState = VideoAppHandler(initialState, action);

    expect(nextState.currentVideo).to.equal({video: "Awesome Video"});
    expect(initialState.currentVideo).to.equal({});
  });
});