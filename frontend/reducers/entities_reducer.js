import { combineReducers } from 'redux';
import songs from './songs_reducer';
import users from './users_reducer';

const entitiesReducer = combineReducers({
  songs,
  users
});

export default entitiesReducer;
