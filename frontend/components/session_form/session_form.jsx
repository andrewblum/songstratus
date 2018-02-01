import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  update(type) {
    return e => (
      this.setState({[type]: e.target.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'Log In') {
      return <Link to="/signup">Or Sign Up instead.</Link>;
    } else {
      return <Link to="/login">Or Log in instead.</Link>;
    }
  }

  renderErrors(){
    return (
      <div className="login-errors">
        {this.props.errors}
      </div>
    );
  }

  render() {
    return (
      <div className="modal">
        <div className="login-form-container">
          <h3>{this.props.formType}</h3>
          <Link to="/" className="close-modal">X</Link>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <div className="login-form">
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Your Username"
                />
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Your Password"
                />
              <input
                type="submit"
                value={this.props.formType}
                className="submit-session"/>
            </div>
          </form>
          <h6>{this.navLink()}</h6>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
