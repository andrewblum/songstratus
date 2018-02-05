import React from 'react';
import ReactPlayer from 'react-player';

class PlayControls extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      url: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0dpWmUK8w1F.mp3',
      playing: false,
      playpause: 'play add-pointer',
      played: 0,
      volume: 0.7,
      inSeek: false,
      duration: 0
    };
    this.pauseOrPlay = this.pauseOrPlay.bind(this);
    this.ref = this.ref.bind(this);
    this.seekClick = this.seekClick.bind(this);
    this.seekUnclick = this.seekUnclick.bind(this);
    this.seekChange = this.seekChange.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
    this.onDuration = this.onDuration.bind(this);
  }

  pauseOrPlay() {
    this.setState({playing: !this.state.playing });
    if (this.state.playing) this.setState({playpause: 'play add-pointer'});
    if (!this.state.playing) this.setState({playpause: 'pause add-pointer'});
  }

  onDuration (duration) {
    this.setState({duration});
  }

  adjustVolume(e) {
    this.setState({ volume: parseFloat(e.target.value) });
  }

  seekClick() {
    this.setState({inSeek: true});
  }

  seekUnclick(e) {
    this.setState({inSeek: false});
    this.player.seekTo(parseFloat(e.target.value));
  }

  seekChange(e) {
    this.setState({played: parseFloat(e.target.value)});
  }

  onProgress(state) {
    console.log(state);
    if (!this.state.inSeek) this.setState(state);
  }

  ref(player) {
    this.player = player;
  }

  render () {
    return (
        <div className="play-controls-box">
          <div className="play-controls">
            <ReactPlayer
              url={this.state.url}
              playing={this.state.playing}
              onProgress={this.moveSlider}
              ref={this.ref}
              onProgress={this.onProgress}
              volume={this.state.volume}
              onDuration={this.onDuration}
            />
            <button
              onClick={this.pauseOrPlay}
              className={this.state.playpause}>
            </button>
            {Math.round(this.state.duration * this.state.played)}
            <input
              className="song-progress"
              type='range' min={0} max={1}
              step='any'
              value={this.state.played}
              onMouseDown={this.seekClick}
              onMouseUp={this.seekUnclick}
              onChange={this.seekChange}
            />
          {Math.round(this.state.duration)}
            <input
              className="volume"
              type='range' min={0} max={1} step='any'
              value={this.state.volume}
              onChange={this.adjustVolume}
            />

          </div>
        </div>
    );
  }
}

export default PlayControls;
