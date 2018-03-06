import { connect } from 'react-redux';
import { receiveCurrentSong,
         playPause,
         setFetchPlayTimeForComment,
         setPlayTimeForComment,
         setSeekWaveformTo,
         setDuration } from '../../actions/song_actions';

import PlayControls from './play_controls';

const mapStateToProps = (state) => ({
  song: state.currentSong.song,
  playing: state.currentSong.playing,
  fetchPlayTimeForComment: state.currentSong.fetchPlayTimeForComment,
  commentTime: state.currentSong.commentTime,
  seekPlayerTo: state.currentSong.seekPlayerTo
});

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
  playPause: (bool) => dispatch(playPause(bool)),
  setFetchPlayTimeForComment: (flag) => dispatch(setFetchPlayTimeForComment(flag)),
  setPlayTimeForComment: (time) => dispatch(setPlayTimeForComment(time)),
  setSeekWaveformTo: (time) => dispatch(setSeekWaveformTo(time))
 });

export default connect(mapStateToProps, mapDispatchToProps)(PlayControls);
