import { all } from 'redux-saga/effects';
import authSaga from './Auth/saga'

export default function* rootSaga(getState) {
    yield all([
        authSaga(),
    ]);
}
