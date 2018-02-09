import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CommentIndex from './comment_index';
import { fetchSongsComments } from '../../actions/comment_actions';

const mapStateToProps = (state) => ({
  comments: state.entities.comments
});

const mapDispatchToProps = (dispatch) => ({
  fetchSongsComments: songId => dispatch(fetchSongsComments(songId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndex));
