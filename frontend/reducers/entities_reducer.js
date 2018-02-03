import { combineReducers } from 'redux';
import songs from './songs_reducer';

const entitiesReducer = combineReducers({
  songs
});

export default entitiesReducer;
