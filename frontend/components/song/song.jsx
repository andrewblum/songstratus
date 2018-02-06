import React from 'react';
import WaveForm from '../wave_form/wave_form';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="small-song-box">

        <div className="small-song-art-box">
          <img
            className="small-song-art"
            src={this.props.track.image_url}>
          </img>
        </div>

        <div className="small-song-content">

          <div className="small-song-control-box">
            <div className="small-song-play">
            </div>
            <div className="small-song-title-box">
              <div className="small-song-artist">
                {this.props.track.artist}
              </div>
              <div className="small-song-title">
                {this.props.track.title}
              </div>
            </div>
          </div>

          <div className="small-song-waveform">
            <WaveForm track={this.props.track}/>
          </div>
          <div className="small-song-social">
            social
          </div>
        </div>

      </div>
    );
  }
}

export default Song;
