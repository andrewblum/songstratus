import { combineReducers } from 'redux';
import songs from './songs_reducer';
import users from './users_reducer';
import comments from './comments_reducer';

const entitiesReducer = combineReducers({
  songs,
  comments,
  users
});

export default entitiesReducer;
