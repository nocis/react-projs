import React, { Component } from "react";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      gender: "",
      check: false,
    };
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    let res = Object.entries(this.state).reduce((s, [k, v]) => {
      return s + "\n" + k + " :" + v;
    }, "");
    alert(res);
  };

  render() {
    let keys = Object.keys(this.state);
    let values = Object.values(this.state);
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div>
          <label>
            {capitalizeFirstLetter(keys[0])}:
            <input
              type="text"
              name={keys[0]}
              value={values[0]}
              onChange={this.onChangeHandler}
            ></input>
          </label>
        </div>
        <div>
          <label>
            {capitalizeFirstLetter(keys[1])}:
            <textarea
              name={keys[1]}
              value={values[1]}
              onChange={this.onChangeHandler}
            ></textarea>
          </label>
        </div>
        <div>
          <label>
            {capitalizeFirstLetter(keys[2])}:
            <select
              name={keys[2]}
              value={values[2]}
              onChange={this.onChangeHandler}
            >
              <option value=""> Choose... </option>
              <option value="male">Male</option>
              <option value="famale">Famale</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            {capitalizeFirstLetter(keys[3])}:
            <input
              type="checkbox"
              name={keys[3]}
              checked={values[3]}
              onChange={this.onChangeHandler}
            ></input>
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
