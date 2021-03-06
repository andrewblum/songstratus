import { combineReducers } from 'redux';
import errors from './errors_reducer';
import session from './session_reducer';
import entities from './entities_reducer';
import currentSong from './current_song_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  currentSong,
  errors
});

export default rootReducer;
