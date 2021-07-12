import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import reducer from "./redux/reducer";
import { creatStore } from "./redux/redux";
import { incrementAction, decrementAction } from "./redux/actions";
import { MyProvider, connect } from "./redux/reactRedux";

const store = creatStore(reducer, { value: 0 });

class Counter extends React.Component {
  addHandler = () => {
    store.dispatch({ type: incrementAction.type });
  };

  subHandler = () => {
    store.dispatch({ type: decrementAction.type });
  };

  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    return (
      <>
        <h1>Counter:{store.getState().value}</h1>
        <h2>Name:{this.props.name}</h2>

        <button onClick={this.addHandler}>Add</button>
        <button onClick={this.subHandler}>Sub</button>
      </>
    );
  }
}

class CounterV2 extends React.Component {
  render() {
    return (
      <>
        <h1>Counter:{this.props.value}</h1>
        <h2>Name:{this.props.name}</h2>

        <button onClick={() => this.props[incrementAction.type]()}>Add</button>
        <button onClick={() => this.props[decrementAction.type]()}>Sub</button>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    value: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    [incrementAction.type]: () => {
      dispatch({ type: incrementAction.type });
    },
    [decrementAction.type]: () => {
      dispatch({ type: decrementAction.type });
    },
  };
};

let NewCounter = connect(mapStateToProps, mapDispatchToProps)(CounterV2);

const MyReactReduxTest = () => {
  return (
    <>
      <Counter name="11111"></Counter>
      <MyProvider store={store}>
        <NewCounter name="wwwwww"></NewCounter>
      </MyProvider>
    </>
  );
};

ReactDOM.render(
  <MyReactReduxTest></MyReactReduxTest>,
  document.getElementById("root")
);
