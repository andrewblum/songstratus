import { connect } from 'react-redux';
import WaveForm from './wave_form';
import { setPlayed, setSeekPlayerTo } from '../../actions/song_actions';

const mapStateToProps = (state) => ({
  song: state.currentSong.song,
  playing: state.currentSong.playing,
  played: state.currentSong.played,
});

const mapDispatchToProps = (dispatch) => ({
  setPlayed: (float) => dispatch(setPlayed(float)),
  setSeekPlayerTo: (time) => dispatch(setSeekPlayerTo(time))
});

export default connect(mapStateToProps, mapDispatchToProps)(WaveForm);
