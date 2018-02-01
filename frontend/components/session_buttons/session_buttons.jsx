import React from 'react';
import { Link } from 'react-router-dom';

  const loggedIn = (user, logout) => (
    <div>
      <Link to="/">Upload</Link>
      <Link to="/">{user.username}</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );

  const notLoggedIn = () => (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  );

  const SessionButtons = (props) => {
    return (
    props.currentUser ?
      loggedIn(props.currentUser, props.logout) : notLoggedIn()
    );
  };

export default SessionButtons;
