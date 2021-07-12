import React from "react";
import CreateTask from "./CreateTask";
import TaskLists from "./TaskLists";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  addTaskHelper = (task) => {
    if (task.task.trim() === "") {
      alert("no empty task!");
      return;
    }
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  deleteTaskHelper = (id) => {
    this.state.tasks.splice(id, 1);
    this.setState(this.state);
  };

  editTaskHelper = (id, task) => {
    this.state.tasks[id].task = task;
    this.setState(this.state);
  };

  doneTaskHelper = (id) => {
    this.state.tasks[id].done = true;
    this.setState(this.state);
    // whether state is changed or not! setState always trigger update and rerender for class comp!!!!!!
    // But setState only re-apply func comp when state is really changed to a new object for func comp!!!!!
    // that's huge difference
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(1111);
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <div>
          <CreateTask addTaskHelper={this.addTaskHelper}></CreateTask>
        </div>
        <div>
          <TaskLists
            tasks={this.state.tasks}
            deleteTaskHelper={this.deleteTaskHelper}
            editTaskHelper={this.editTaskHelper}
            doneTaskHelper={this.doneTaskHelper}
          ></TaskLists>
        </div>
      </div>
    );
  }
}
