import logo from "./logo.svg";
import "./App.css";
import Layout from "./contextAPI/Layout";
import { ThemeContextConsumer } from "./contextAPI/ThemeContext";
import ContextMain from "./contextAPI/ContextMain";
import ReducerMain from "./useReducer/ReducerMain";

function App() {
  return (
    <>
      <ContextMain></ContextMain>
      <ReducerMain></ReducerMain>
    </>
  );
}

export default App;
