import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";

export default function configureStore() {
  // 1. apply middleware
  //    1.1 saga
  const sagaMiddleware = createSagaMiddleware();

  let middlewares = applyMiddleware(sagaMiddleware);
  // 2. apply dev tools
  if (process.env.NODE_ENV !== "production") {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === "function") {
      middlewares = compose(sagaMiddleware, devToolsExtension());
      //compose group funcs right->left!!!
    }
  }

  // 3. create store
  const store = createStore(reducers, {}, middlewares());
  sagaMiddleware.run(sagas);

  // 4. hot loader
  /*if (module.hot) {
    module.hot.accept("./reducers", () => {
      store.replaceReducer(require("./reducers").default);
    });
  }*/

  return store;
}
