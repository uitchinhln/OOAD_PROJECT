import {all, fork, takeEvery, put} from "redux-saga/effects";
import authActions from './action';
import preloadActions from '../preloader/action';
import {store} from "../store";

export function* loginRequest() {
    yield takeEvery(authActions.LOGIN_REQUEST, function* ({payload}) {
        if (payload && payload.status && payload.status === "SUCCESS" && payload.data) {
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

export default function* rootSaga() {
    yield all([
        fork(loginRequest),
    ]);
}