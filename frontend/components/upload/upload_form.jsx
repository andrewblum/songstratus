import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class UploadForm extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {open: true};
  }

  render() {
    return (
      <div className="upload-modal">
        <div className="upload-box">
          <div className="upload-text">Upload to Song Stratus</div>
          <button
            className='upload-button'
            to="/">
            Choose a file to upload
          </button>
        </div>
      </div>
    );
  }
}

export default UploadForm;
