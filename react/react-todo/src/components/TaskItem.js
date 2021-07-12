import React, { Component } from "react";

export default class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      task: this.props.task.task,
    };
  }

  onEditHandler = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    // not change route
    this.props.editTaskHelper(this.props.id, this.state.task);
    this.onEditHandler();
  };

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({ task: e.target.value });
  };

  render() {
    return (
      <tr>
        {this.state.isEditing ? (
          <>
            <td>
              <form onSubmit={this.onSubmitHandler}>
                <input
                  type="text"
                  value={this.state.task}
                  onChange={this.changeHandler}
                  autoFocus
                ></input>
              </form>
            </td>
            <td>
              <button onClick={this.onSubmitHandler} type="submit">
                Save
              </button>
              <button onClick={() => this.onEditHandler()}>Back</button>
            </td>
          </>
        ) : (
          <>
            <td>
              <span className={this.props.task.done ? "done" : ""}>
                {this.state.task}
              </span>
            </td>
            <td>
              <button onClick={this.onEditHandler}>Edit</button>
              {this.props.task.done ? null : (
                <button
                  onClick={() => this.props.doneTaskHelper(this.props.id)}
                >
                  Done
                </button>
              )}
              <button
                onClick={() => this.props.deleteTaskHelper(this.props.id)}
              >
                Remove
              </button>
            </td>
          </>
        )}
      </tr>
    );
  }
}
