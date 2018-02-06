import React from 'react';

class WaveForm extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  componentDidMount() {
    this.wavesurfer = WaveSurfer.create({
      container: `#song-${this.props.track.id}-waveform`,
      progressColor: '#f50',
      height: 60,
      cursorWidth: 0,
      barHeight: 5,
      barWidth: 1,
    });
    this.wavesurfer.load(this.props.track.audio_url);
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
