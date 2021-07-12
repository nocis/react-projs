export function creatStore(reducers, initState) {
  let state = initState;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducers(state, action);
    listeners.map((l) => {
      l();
    });
  }

  function subscribe(cb) {
    listeners.push(cb);
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}
