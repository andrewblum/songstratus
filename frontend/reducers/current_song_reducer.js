import merge from 'lodash/merge';
import { RECEIVE_CURRENT_SONG,
         PLAY_PAUSE,
         SET_FETCH_PLAY_TIME_FOR_COMMENT,
         SET_PLAY_TIME_FOR_COMMENT,
         RECEIVE_PLAY_TIME_FOR_COMMENT,
         SET_SEEK_PLAYER_TO,
         SET_SEEK_WAVEFORM_TO } from '../actions/song_actions';

let _nullState = {
  playing: false,
  played: 0.0,
  song:{
  id: -1,
  audio_url: "//:0",
  image_url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif"
  },
  fetchPlayTimeForComment: false,
  playTimeForComment: 0,
  seekPlayerTo: 0,
  seekWaveformTo: 0
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
    case SET_FETCH_PLAY_TIME_FOR_COMMENT:
      if (action.flag) {
        newState = merge({}, state, { fetchPlayTimeForComment: true});
      } else {
        newState = merge({}, state, { fetchPlayTimeForComment: false});
      }
      return newState;
    case RECEIVE_PLAY_TIME_FOR_COMMENT:
      newState = merge({}, state, { playTimeForComment: action.time });
      return newState;
    case SET_SEEK_PLAYER_TO:
      newState = merge({}, state, { seekPlayerTo: action.time });
      return newState;
    case SET_SEEK_WAVEFORM_TO:
      newState = merge({}, state, { seekWaveformTo: action.time });
      return newState;
    default:
      return state;
  }
};

export default currentSongReducer;
