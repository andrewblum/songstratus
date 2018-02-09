import merge from 'lodash/merge';
import { RECEIVE_CURRENT_SONG,
         PLAY_PAUSE,
         SET_PLAYED} from '../actions/song_actions';

let _nullState = {
  playing: false,
  played: 0.0,
  song:{
  id: -1,
  audio_url: "//:0",
  image_url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif"
  }
};

const currentSongReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_CURRENT_SONG:
      newState = merge({}, state, { song: action.song });
      return newState;
    case PLAY_PAUSE:
      newState = merge({}, state, { playing: action.bool });
      return newState;
    case SET_PLAYED:
      newState = merge({}, state, { played: action.float });
      return newState;
    default:
      return state;
  }
};

export default currentSongReducer;
