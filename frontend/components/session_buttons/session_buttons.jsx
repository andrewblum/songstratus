import React from 'react';
import { Link } from 'react-router-dom';
import UploadFormContainer from '../upload_form/upload_form_container';

  class SessionButtons extends React.Component {

    constructor(props) {
      super(props);
      this.props = props;
      this.state = {
        uploadModalOpen: false,
        userModalOpen: false
      };
      this.loggedIn = this.loggedIn.bind(this);
      this.notLoggedIn = this.notLoggedIn.bind(this);
      this.renderUploadModal = this.renderUploadModal.bind(this);
      this.renderUserModal = this.renderUserModal.bind(this);
      this.toggleUserModal = this.toggleUserModal.bind(this);
      this.toggleUploadModal = this.toggleUploadModal.bind(this);
      this.closeUploadModal = this.closeUploadModal.bind(this);
      this.closeUserModal = this.closeUserModal.bind(this);
    }

    toggleUserModal() {
      this.setState({userModalOpen: !this.state.userModalOpen});
    }

    toggleUploadModal() {
      this.setState({uploadModalOpen: !this.state.uploadModalOpen});
    }

    closeUploadModal(e) {
      if (e.target === e.currentTarget) {
        this.setState({uploadModalOpen: false});
      }
    }

    closeUserModal() {
      this.setState({userModalOpen: false});
    }

    renderUploadModal() {
      if (this.state.uploadModalOpen) {
        return (
          <UploadFormContainer closeUploadModal={this.closeUploadModal}/>
        );
      }
      return (<div></div>);
    }

    renderUserModal() {
      if (this.state.userModalOpen) {
        return (
          <div
            onClick={this.closeUserModal}
            className="user-dropdown-modal">
            <div className="user-dropdown">
              <ul>
                <li>
                  <Link className="drop-item-profile"
                    to={`/${this.props.currentUser.id}`}>
                    Profile
                    <div className="drop-item-profile-icon"/>
                  </Link>
                </li>
                <li>
                  <Link className="drop-item-tracks"
                    to={`/${this.props.currentUser.id}`}>
                    Tracks
                    <div className="drop-item-tracks-icon"/>
                  </Link>
                </li>
                <li>
                  <Link className="drop-item-logout"
                    to="#" onClick={this.props.logout}>
                    Sign Out
                    <div className="drop-item-logout-icon"/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        );
      }
      return (<div></div>);
    }

    loggedIn(user, logout) {
      return (
        <div className="session-buttons">
          <Link to="#" onClick={this.toggleUploadModal}>Upload</Link>
          {this.renderUploadModal()}
          <Link to="#"
            onClick={this.toggleUserModal}
            className="user-dropdown-anchor">
            <img className="profile-img-small"
              src={user.profile_image_url}>
            </img>
            <div className="user-name">
              {user.username}
            </div>
            <div className='arrow'></div>
          </Link>
          {this.renderUserModal()}
        </div>
      );
    }

    notLoggedIn() {
      return (
        <div>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Create Acount</Link>
        </div>
      );
    }

    render() {
      return (
      this.props.currentUser ?
        this.loggedIn(this.props.currentUser, this.props.logout)
        : this.notLoggedIn()
      );
    }
  }

export default SessionButtons;
