import { createStore } from "redux";

//reducer: take action to mutate state
// pure func: no side effect, same in same out, data immutable
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

let store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "counter/incremented" });
// every dispatch trigger subscribe!!!
// even state is not change

store.dispatch({ type: "counter/incremented" });

store.dispatch({ type: "counter/decremented" });
