import React from 'react';
import SongIndexContainer from '../song_index/song_index_container';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
    this.profileImageUploadButton = this.profileImageUploadButton.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  updateImage(e) {
    this.setState({imageUrl: "https://i.imgur.com/TZcL7Cc.gif"});
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e){
    let formData = new FormData;
    formData.append("user[profile_image]", this.state.imageFile);
    this.props.updateUser(this.props.match.params.userId, formData);
  }

  profileImageUploadButton() {
    if (this.props.currentUser.id == this.props.match.params.userId) {
      return (
        <label className='update-profile-image-button'>
          Update image
          <input
            type="file"
            onChange={this.updateImage}
            className="hidden"
          />
        </label>
      );
    } else {
      return (<div></div>);
    }
  }

  render() {
    if (!this.props.user) {
      return (<div>Loading...</div>);
    }
    return (

      <div className="main-user-view">

        <div className="main-user-top">
          <div className="main-user-image-box">
            {this.profileImageUploadButton()}
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
