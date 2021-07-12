import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeContextProvider } from "./contextAPI/ThemeContext";

class Title extends React.Component {
  render() {
    return (
      <div>
        <h3> 这里是title </h3>
      </div>
    );
  }
}
class Content extends React.Component {
  render() {
    return (
      <div>
        <h3> 这里是Content </h3>
      </div>
    );
  }
}
class Home extends React.Component {
  render() {
    return (
      <div>
        <h3> 这里是home </h3>
        {/* 2. 在Home组件中使用 this.props.children来接收 */}
        {this.props.children}
      </div>
    );
  }
}
class App2 extends React.Component {
  render() {
    return (
      <Home>
        {/* 1. 将子组件放在Home组件的内容中 */}
        <Title />
        <Content />
      </Home>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App2 />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
