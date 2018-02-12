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
    this.demoLogin = this.demoLogin.bind(this);
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

  demoLogin() {
    const user = {username: "Slow Magic", password: "password"};
    this.props.login(user);
  }

  navLink() {
    if (this.props.formType === 'Log In') {
      return <Link to="#"
        onClick={this.props.switchForms}>
        Or Create an account instead.</Link>;
    } else {
      return <Link to="#"
        onClick={this.props.switchForms}>
        Or Log In instead.</Link>;
    }
  }

  renderErrors(){
    if (!this.props.errors) {
      return (<div className="login-errors"></div>);
    }
    return (
      <div className="login-errors">
        <ul>
          {this.props.errors.map((error) => (
            <li>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div onClick={this.props.closeSessionModal} className="upload-modal">
        <div onClick={this.props.closeSessionModal} className="upload-close-x"></div>
        <div className="login-form-container">
          <h3>{this.props.formType}</h3>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="login-form">
                {this.renderErrors()}
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
          <div className="switch-forms-box">
            {this.navLink()}
          </div>
          <div className="demo-box">
            <div className="demo-icon"></div>
            <button
              className="demo-button"
              onClick={this.demoLogin}>
              Log In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
