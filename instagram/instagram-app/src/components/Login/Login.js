import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  loginSubmit = e => {
    e.preventDefault();
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <form className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={this.state.username}
          name="username"
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          name="username"
          onChange={this.handleInputChange}
        />
        <button onClick={this.loginSubmit}>Log In</button>
      </form>
    );
  }
}

export default Login;
