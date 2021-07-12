import React, { Component } from "react";

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      done: false,
    };
  }
  submitHandler = (e) => {
    e.preventDefault();
    this.props.addTaskHelper(this.state);
    this.setState({ task: "" });
    // insert todo in p
  };

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({ task: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="Enter task"
          value={this.state.task}
          onChange={this.changeHandler}
          autoFocus
        ></input>
        <button type="submit">Add</button>
      </form>
    );
  }
}
