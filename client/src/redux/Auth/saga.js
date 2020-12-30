import {all, fork, takeEvery, put} from "redux-saga/effects";
import authActions from './action';
import preloadActions from '../Preloader/action';
import store from "../store";

export function* loginRequest() {
    yield takeEvery(authActions.LOGIN_REQUEST, function* ({payload}) {
        console.log(payload);
        if (payload && payload.status && payload.status === 1 && payload.data) {
            localStorage.setItem("id_token", payload.data);
            store.dispatch(preloadActions.setLoggedIn(true));
            yield put({
                type: authActions.LOGIN_SUCCESS,
                token: payload.data,
            });
        } else {
            yield put({
                type: authActions.LOGIN_FAILURE
            });
        }
    });
}

export function* verifySessionRequest() {
    yield takeEvery(preloadActions.CHECK_SESSION, function* ({payload}) {
        console.log(payload);
        yield put({
            type: authActions.LOGIN_SUCCESS,
            payload: payload,
        });
    });
}

export default function* rootSaga() {
    yield all([
        fork(loginRequest),
        fork(verifySessionRequest),
    ]);
}
