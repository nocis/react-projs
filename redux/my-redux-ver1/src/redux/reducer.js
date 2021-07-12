import { incrementAction, decrementAction } from "./actions";

export default function reducer(state, { type, payload }) {
  switch (type) {
    case incrementAction.type:
      return { ...state, value: incrementAction.action(state.value) };
    case decrementAction.type:
      return { ...state, value: decrementAction.action(state.value) };
  }
}
