import { connect } from 'react-redux';
import { receiveCurrentSong, playPause } from '../../actions/song_actions';
import PlayControls from './play_controls';

const mapStateToProps = (state) => ({
  song: state.currentSong.song,
  playing: state.currentSong.playing
});

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
  playPause: (bool) => dispatch(playPause(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayControls);
