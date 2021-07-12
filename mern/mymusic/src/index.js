import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import configureStore from "./core/store";
import { Provider } from "react-redux";

import "./views/styles/root.scss";
/*



import { appActions } from "./core/app";


import mediaQueryRules from "./views/media";

import registerServiceWorker from "./register-service-worker";


*/

/*********************************************************/
// components import
/*********************************************************/
import App from "./views/App";

/*********************************************************/
// vars declaration
/*********************************************************/

const rootElement = document.getElementById("root");
const store = configureStore();

/*********************************************************/
// funcs definition
/*********************************************************/
const renderView = (Component) => (
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      {/*
      Router is more lowlevel than BrowserRouter,
      BrowserRouter: const history = useHistory();
      Router:        history=createHistory()
      */}
      <div>
        <Component />
      </div>
    </Router>
  </Provider>
);

function render(Component) {
  ReactDOM.render(renderView(Component), rootElement);
}

/*
if (module.hot) {
  module.hot.accept("./views/app", () => {
    render(require("./views/app").default);
  });
}
*/

/*
store.dispatch(
  appActions.initApp({
    media: mediaQueryRules,
  })
);
*/

/*registerServiceWorker();*/

/*********************************************************/
// execution
/*********************************************************/
render(App);
