import React, { Component } from "react";
import TaskItem from "./TaskItem";

export default class TaskLists extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((item, idx) => {
            return (
              <TaskItem
                key={idx}
                id={idx}
                task={item}
                editTaskHelper={this.props.editTaskHelper}
                deleteTaskHelper={this.props.deleteTaskHelper}
                doneTaskHelper={this.props.doneTaskHelper}
              ></TaskItem>
            );
          })}
        </tbody>
      </table>
    );
  }
}
