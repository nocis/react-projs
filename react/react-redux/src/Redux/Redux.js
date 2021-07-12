const { createStore } = require("redux");

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counterReducer);

export const myStore = myCreateStore(counterReducer);

function myCreateStore(reducer) {
  let listeners = [];
  let state;
  state = reducer(state, { type: "____INIT____" });
  function getState() {
    return state;
  }
  function subscribe(subCallback) {
    listeners.push(subCallback);
  }
  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}
// myStore.subscribe(() => console.log(myStore.getState()));
// myStore.subscribe(() => console.log('hey'));

// myStore.dispatch({ type: 'counter/decremented' });
// myStore.dispatch({ type: 'counter/decremented' });
// myStore.dispatch({ type: 'counter/decremented' });

//console.log(myStore.getState());

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

// // The only way to mutate the internal state is to dispatch an action.
// // The actions can be serialized, logged or stored and later replayed.
// store.subscribe(() => console.log(store.getState()));
// store.subscribe(() => console.log('hello'));
// store.dispatch({ type: 'counter/incremented' });

// // //console.log(store.getState());
// // // {value: 1}
// store.dispatch({ type: '' });
// // // {value: 2}
// store.dispatch({ type: 'counter/decremented' });
// // {value: 1}

// pure function : no side effect, same input same ouput, data is imuteable
// function foo(num) {
//   return foo2(num);
// }

// function foo2(num) {
//   return Math.random(num) * 1000;
// }

// foo(5);
// foo2(5);

// function foo(obj) {
//   obj.name = 'patrick';
//   return obj;
// }
// function foo2(obj) {
//   return {
//     ...obj,
//     name: 'patric',
//   };
// }
