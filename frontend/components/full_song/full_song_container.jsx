import { connect } from 'react-redux';
import FullSong from './full_song';
import { fetchUser } from '../../actions/user_actions';
import { createComment } from '../../actions/comment_actions';
import { fetchSong,
         playPause,
         receiveCurrentSong } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    song: state.entities.songs[ownProps.match.params.songId],
    currentSong: state.currentSong,
    playing: state.currentSong.playing,
    pathUser: state.entities.users[ownProps.match.params.userId],
    currentUser: state.session.currentUser,
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
  fetchSong: (songId) => dispatch(fetchSong(songId)),
  playPause: (bool) => dispatch(playPause(bool)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(FullSong);
