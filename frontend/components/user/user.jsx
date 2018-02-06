import React from 'react';
import SongIndexContainer from '../song_index/song_index_container';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    if (!this.props.user) {
      return (<div>Loading...</div>);
    }
    return (

      <div className="main-user-view">

        <div className="main-user-top">
          <div className="main-user-image-box">
            <img
              className="main-user-image"
              src={`${this.props.user.profile_image_url}`}/>
          </div>
          <div className="main-user-title-box">
            <div className="main-user-title">
              {this.props.user.username}
            </div>
          </div>
        </div>

        <div className="main-user-bottom">
          <div className="main-user-bottom-nav">
            Tracks
          </div>
          <div className="main-user-bottom-content">
            <div className="main-user-bottom-song-box">
              <SongIndexContainer/>
            </div>
            <div className="main-user-sidebar">
              Sidebar
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default Song;
