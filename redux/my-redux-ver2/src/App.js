import logo from "./logo.svg";
import "./App.css";
import React, { useState, useContext } from "react";

const appContext = React.createContext(null);

const User = () => {
  const contextValue = useContext(appContext);
  // only make use of useContext inside a functional component
  // set static contextType allow use context out of render
  return <div>User:{contextValue.appState.user.name}</div>;
};

const UserModifier = () => {
  const contextValue = useContext(appContext);
  const onChange = (e) => {
    contextValue.appState.user.name = e.target.value;
    contextValue.setAppState({ ...contextValue.appState });
    //contextValue.setAppState({ user: { name: e.target.value } });
  };
  return (
    <div>
      <input
        value={contextValue.appState.user.name}
        onChange={onChange}
      ></input>
    </div>
  );
};

const One = () => {
  return (
    <section>
      One
      <User />
    </section>
  );
};
const Two = () => {
  return (
    <section>
      Two
      <UserModifier />
    </section>
  );
};
const Three = () => {
  return (
    <section>
      Three
      <User />
    </section>
  );
};

function App() {
  const [appState, setAppState] = useState({
    user: {
      name: "aaaa",
      age: 10,
    },
  });

  const contextValue = { appState, setAppState };
  return (
    <appContext.Provider value={contextValue}>
      <One></One>
      <Two></Two>
      <Three></Three>
    </appContext.Provider>
  );
}

export default App;

/*
useMemo compute and record a var in fiber, it will not recompute and store the new version of this var in fiber until dependency changed.

any component applied in render function did a function call and returned a brand new jsx object!!!!!! which means it is very different 
from its previous version that has a distinct reference, and this will cause previousporps!== currentprops, then rerender!!!!

so useMemo can deal with those children components who accept invariant partial props and does not need to be rerendered.
by using a HOC to return an exactly same jsx object as previous to prevent rerender.
*/
