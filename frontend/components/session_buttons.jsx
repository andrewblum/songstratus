import React from 'react';
import { Link } from 'react-router-dom';

  const loggedIn = (user, logout) => (
    <div>
      {user.username}
      <button onClick={logout}>Logout</button>
    </div>
  );

  const notLoggedIn = () => (
    <div>
      <Link to="/login">Sign Up</Link>
      <Link to="/signup">Log In</Link>
    </div>
  );

  const SessionButtons = (props) => (
    props.currentUser ?
      loggedIn(props.currentUser, props.logout) : notLoggedIn()
  );

export default SessionButtons;
