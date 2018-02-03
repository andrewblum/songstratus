import React from 'react';

class PlayControls extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform'
    });
    this.wavesurfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');
  }

  render () {
    return (
      <div>
        <div id="waveform"></div>
      </div>
    );
  }
}

export default PlayControls;
