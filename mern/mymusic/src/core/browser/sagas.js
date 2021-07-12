/*
function* main() {
    yield fork(someSaga);
    console.log('this won't wait for the completion of someSaga');
}

function* main() {
    yield call(someSaga);
    console.log('this will wait for the completion of someSaga');
}

take: blocking and wait until action issued
put: blocking and issue an action
select: selector

*/
import { eventChannel } from "redux-saga";
import { call, fork, put, take } from "redux-saga/effects";

//=====================================
//  FLOW
//-------------------------------------

//=====================================
//  ENTRY
//-------------------------------------

export const browserSagas = [];
