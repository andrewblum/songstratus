import merge from 'lodash/merge';
import { RECEIVE_COMMENTS } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_COMMENTS:
      newState = merge({}, state, action.comments);
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
