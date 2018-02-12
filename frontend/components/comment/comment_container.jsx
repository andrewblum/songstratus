import { connect } from 'react-redux';
import Comment from './comment';
import { deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (songId, commentId) => dispatch(deleteComment(songId, commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
