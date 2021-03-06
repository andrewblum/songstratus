import { connect } from 'react-redux';
import Comment from './comment';
import { deleteComment } from '../../actions/comment_actions';
import { setSeekPlayerTo,
         setSeekWaveformTo } from '../../actions/song_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (songId, commentId) => dispatch(deleteComment(songId, commentId)),
  setSeekPlayerTo: (time) => dispatch(setSeekPlayerTo(time)),
  setSeekWaveformTo: (time) => dispatch(setSeekWaveformTo(time))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
