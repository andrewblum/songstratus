import merge from 'lodash/merge';
import { RECEIVE_COMMENTS, RECEIVE_COMMENT} from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_COMMENTS:
      newState = merge({}, state, action.comments);
      return newState;
    case RECEIVE_COMMENT:
      newState = merge({}, state, {[action.comment.id]: action.comment});
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
