import React from 'react';
import SessionButtonsContainer
       from '../session_buttons/session_buttons_container';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.leftNavElements = this.leftNavElements.bind(this);
  }

  leftNavElements(props) {
    if (props.currentUser) {
      return (
        <div className="left-nav-links">
            <div className="nav-home-box">
              <Link to="/">Home</Link>
            </div>
            <div className="nav-collection-box">
              <Link to={`/${this.props.currentUser.id}`}>Collection</Link>
            </div>
        </div>
      );
    } else {
      return (
        <li className="left-nav-links">
          <Link to="/">Charts</Link>
        </li>
      );
    }
  }

  render() {
    return (
      <div className="nav-bar">
        <ul className="nav-bar-list">
          <li className="logo-box">
            <Link to="/"></Link>
          </li>
          {this.leftNavElements(this.props)}
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
  }
}

export default NavBar;
