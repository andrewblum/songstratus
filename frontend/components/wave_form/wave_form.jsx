import React from 'react';
import WaveSurfer from 'wavesurfer.js';
import CommentOverlayContainer from '../comment_overlay/comment_overlay_container';


class WaveForm extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {comments: ""};
  }

  componentWillReceiveProps(newProps) {
    if (newProps.playing && newProps.song.id == newProps.track.id) {
      this.wavesurfer.play();
    } else {
      this.wavesurfer.pause();
    }
    if (newProps.seekWaveformTo != this.props.seekWaveformTo
        && newProps.song.id == newProps.track.id) {
      let seek = newProps.seekWaveformTo;
      if (newProps.seekWaveformTo > 1.0) {
        seek = seek / this.wavesurfer.getDuration();
      }
      this.wavesurfer.seekTo(seek);
    }
  }

  componentDidMount() {
    this.wavesurfer = WaveSurfer.create({
      container: `#song-${this.props.track.id}-waveform`,
      progressColor: '#f50',
      height: this.props.height,
      cursorWidth: 0,
      barHeight: 1,
      barWidth: 2,
      waveColor: this.props.color
    });
    this.wavesurfer.load(this.props.track.audio_url);
    this.wavesurfer.setMute(true);
    this.wavesurfer.on('seek', e => {
      if (this.props.track.id === this.props.song.id) {
        this.props.setSeekPlayerTo(e);
      }
    });
    this.wavesurfer.on('ready', e => {
      if (this.props.displayComments) {
        this.setState({comments: <CommentOverlayContainer
                    duration={this.wavesurfer.getDuration()}
                    song={this.props.song.id}/>}) ;
      }
    });
  }

  render () {
    return (
      <div className="relative-box">
        <div id={`song-${this.props.track.id}-waveform`}></div>
        { this.state.comments }
      </div>
    );
  }
}

export default WaveForm;
