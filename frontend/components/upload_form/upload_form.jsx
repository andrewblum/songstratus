import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class UploadForm extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      audioFile: null,
      audioUrl: "",
      imageFile: null,
      imageUrl: "//:0",
      title: "",
      description: ""
    };
    this.updateFile = this.updateFile.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFile(e) {
    this.setState({audioUrl: " Uploading . . ."});
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ audioFile: file, audioUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
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

  updateField(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e){
    let formData = new FormData;
    formData.append("song[image]", this.state.imageFile);
    formData.append("song[audio]", this.state.audioFile);
    formData.append("song[title]", this.state.title);
    formData.append("song[user_id]", this.props.currentUser.id);
    formData.append("song[description]", this.props.description);
    this.props.uploadSong(formData);
  }

  render() {
    return (
      <div onClick={this.props.closeUploadModal} className="upload-modal">
        <div onClick={this.props.closeUploadModal} className="upload-close-x"></div>
        <div className="upload-box">
          <div className="upload-text">Upload to Song Stratus</div>
          <form onSubmit={this.handleSubmit}>

            <label className='upload-button'>
              Choose a file to upload
              <input
                type="file"
                onChange={this.updateFile}
                className="hidden"
                >
              </input>
            </label>

            <div className="inner-upload-box">

              <div className="song-image-preview">
                <img className="song-image" src={this.state.imageUrl}></img>
                <label className='choose-image-button'>
                  Update image
                  <input
                    type="file"
                    onChange={this.updateImage}
                    className="hidden"
                  />
                </label>
                <div className="camera"></div>
              </div>

              <div className='upload-inputs-box'>
                <div className="text-field">
                  <label className="title">Title</label>
                  <input
                    type="text"
                    onChange={this.updateField('title')}
                    value={this.state.title}
                    className="title-input"
                    placeholder="Title your track"
                    />
                  <label className="description">Description</label>
                    <textarea
                      row="6"
                      cols="40"
                      onChange={this.updateField('description')}
                      value={this.state.description}
                      className="description-input"
                      placeholder="Describe your track"
                      />
                </div>
              </div>



            </div>
            <div className='submit-upload-box'>
              <button
                type="submit"
                className='save-button'>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UploadForm;
