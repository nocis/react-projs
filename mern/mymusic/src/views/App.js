import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import AppHeader from "./components/AppHeader/AppHeader";
import Player from "./components/Player/Player";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import User from "./pages/user/User";

import "./App.scss";

export function App() {
  return (
    <>
      <AppHeader></AppHeader>

      <main className="main">
        <Route exact={true} path="/">
          <section>
            <Home></Home>
          </section>
        </Route>
        <Route path="/search">
          <section>
            <Search></Search>
          </section>
        </Route>
        <Route path="/user">
          <section>
            <User></User>
          </section>
        </Route>
      </main>

      <Player></Player>
    </>
  );
}

//=====================================
//  CONNECT
//-------------------------------------

export default App;

/*
switch vs: no switch?
switch render exclusively, which means it only render one of those!!!!


withRouter: let all inside can use :
match
location
and history
*/
