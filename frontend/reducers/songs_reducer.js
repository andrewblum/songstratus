import merge from 'lodash/merge';
import RECEIVE_SONG from '../actions/song_actions';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_SONG:
      newState = merge({}, state, { [action.song.id]: action.song });
      return newState;
    default:
      return state;
  }
};

export default songsReducer;
