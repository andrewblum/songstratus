import React from 'react';

class WaveForm extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  componentWillReceiveProps(newProps) {
    if (newProps.playing && newProps.song.id == newProps.track.id) {
      this.wavesurfer.play();
    } else {
      this.wavesurfer.pause();
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
    this.wavesurfer.on('seek', e => this.props.setPlayed(e));
    this.wavesurfer.on('seek', e => {
      if (this.props.track.id === this.props.song.id) {
        this.props.setSeekPlayerTo(e);
      }
    });
  }

  render () {
    return (
      <div>
        <div id={`song-${this.props.track.id}-waveform`}></div>
      </div>
    );
  }
}

export default WaveForm;
