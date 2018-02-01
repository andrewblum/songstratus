import React from 'react';
import SessionButtonsContainer
       from '../session_buttons/session_buttons_container';
import { Link } from 'react-router-dom';

const leftNavElements = (props) => {
  if (props.currentUser) {
    return (
      <div className="left-nav-links">
          <Link to="/">Home</Link>
          <Link to="/">Collection</Link>
      </div>
    );
  } else {
    return (
      <li className="left-nav-links">
        <Link to="/">Charts</Link>
      </li>
    );
  }
};

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <ul className="nav-bar-list">
        <li className="logo-box">
          <Link to="/"></Link>
        </li>
        {leftNavElements(props)}
        <li className="search-bar-box">
          <form className="search-form">
            <input
              className="search-bar"
              type="search"
              placeholder="Search for artists, bands, tracks, podcasts"
            />
            <button
              className="search-submit"
              type="submit"
            />
          </form>
        </li>
        <SessionButtonsContainer/>
      </ul>
    </div>
  );
};

export default NavBar;
