import { connect } from 'react-redux';
import WaveForm from './wave_form';
import { setSeekPlayerTo } from '../../actions/song_actions';

const mapStateToProps = (state) => ({
  song: state.currentSong.song,
  playing: state.currentSong.playing,
  played: state.currentSong.played,
  seekWaveformTo: state.currentSong.seekWaveformTo
});

const mapDispatchToProps = (dispatch) => ({
  setSeekPlayerTo: (time) => dispatch(setSeekPlayerTo(time))
});

export default connect(mapStateToProps, mapDispatchToProps)(WaveForm);
