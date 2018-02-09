import * as CommentApiUtil from '../util/comment_api_util';

export const fetchSongsComments = (songId) => (
  $.ajax({
    url:`api/songs/${songId}/comments`,
    method:'GET'
  })
);

export const createComment = (comment) => (
  $.ajax({
    url: `api/songs/${comment.song_id}/comments`,
    method: 'POST',
    data: { comment: comment }
  })
);
