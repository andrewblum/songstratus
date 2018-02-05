import React from 'react';
import WaveForm from '../wave_form/wave_form';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="main-song-view">
        <div className="main-song-top">
          <div className="top-song-left">
            <div className="main-song-title">
            </div>
            <div className="main-song-waveform">
              <WaveForm/>
            </div>
          </div>
          <div className="main-song-art">
          </div>
        </div>
        <div className="main-song-bottom">
          comments and such go here
        </div>
      </div>
    );
  }
}

export default Song;
