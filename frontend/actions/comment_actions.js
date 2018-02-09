export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
import * as CommentApiUtil from '../util/comment_api_util';

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const fetchSongsComments = (songId) => dispatch => (
  CommentApiUtil.fetchSongsComments(songId)
    .then(comments => dispatch(receiveComments(comments)))
);

export const createComment = (comment) => dispatch => (
  CommentApiUtil.createComment(comment)
    .then(newComment => dispatch(receiveComment(newComment)))
);
