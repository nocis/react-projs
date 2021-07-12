import "./App.css";

import { BrowserRouter, Link, Switch, Route, NavLink } from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/" exact={true} activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/product" activeClassName="active">
          Product
        </NavLink>
      </div>
      <div>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/product/:id">
            <Product></Product>
          </Route>

          <Route path="/product">
            <Product></Product>
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
