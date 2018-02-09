import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CommentIndex from './comment_index';
import { fetchSongsComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let songsComments = {};
  Object.keys(state.entities.comments).forEach(each => {
    if (state.entities.comments[each].song_id
        == ownProps.match.params.songId) {
          songsComments[each] = state.entities.comments[each];
    }
  });
    return {
      state: state,
      comments: songsComments
    };
};

const mapDispatchToProps = (dispatch) => ({
  fetchSongsComments: songId => dispatch(fetchSongsComments(songId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndex));
