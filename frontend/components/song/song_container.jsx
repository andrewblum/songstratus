import { connect } from 'react-redux';
import { receiveCurrentSong, playPause } from '../../actions/song_actions';
import Song from './song';

const mapStateToProps = (state) => ({
  currentSong: state.currentSong,
  playing: state.currentSong.playing
});

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
  playPause: (bool) => dispatch(playPause(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(Song);
