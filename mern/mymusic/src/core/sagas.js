import { all } from "redux-saga/effects";

import { browserSagas } from "./browser";

/*
all : blocking and Running all effects In Parallel!!!

When we yield an array of effects, the generator is blocked until 
all the effects are resolved or as soon as one is rejected (just like how Promise.all behaves).
*/

export default function* sagas() {
  yield all([...browserSagas]);
}
