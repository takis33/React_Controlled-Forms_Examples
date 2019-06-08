import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`You typed: ${this.state.username}`);
    this.setState({ username: "" });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br />
          <br />
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            name="email"
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            name="password"
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
