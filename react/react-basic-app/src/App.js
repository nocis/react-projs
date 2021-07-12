import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "fuck" };
  }

  hc = (e) => {
    this.setState((a) => {
      console.log(e);
    });
    console.log(this.state);
  };

  test() {
    return class a {};
  }
  render() {
    let obj = { a1: 1, a2: 2 };
    let { a1 } = obj;
    console.log(a1, this.test(), new (this.test())());
    return <div></div>;
  }
}

export default App;
