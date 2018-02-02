import React from 'react';
import { Link } from 'react-router-dom';

  const loggedIn = (user, logout) => (

    <div className="session-buttons">
      <button onClick={logout}>Logout</button>
      <Link to="/upload">Upload</Link>
      <Link to="/" className="dropdown-box">
        <img className="profile-img-small"
          src={user.profile_image_url}>
        </img>
        <div className="user-name">
          {user.username}
        </div>
        <div className='arrow'></div>
      </Link>
    </div>
  );

  const notLoggedIn = () => (
    <div>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Create Acount</Link>
    </div>
  );

  const SessionButtons = (props) => {
    return (
    props.currentUser ?
      loggedIn(props.currentUser, props.logout) : notLoggedIn()
    );
  };

export default SessionButtons;
