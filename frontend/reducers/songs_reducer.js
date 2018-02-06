import merge from 'lodash/merge';
import { RECEIVE_SONG,
         RECEIVE_ALL_SONGS } from '../actions/song_actions';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_SONG:
      newState = merge({}, state, { [action.song.id]: action.song });
      return newState;
    case RECEIVE_ALL_SONGS:
      newState = merge({}, state, action.songs);
      return newState;
    default:
      return state;
  }
};

export default songsReducer;
