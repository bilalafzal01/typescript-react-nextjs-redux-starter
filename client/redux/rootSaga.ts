import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import todoSaga from './todo/todoSaga';

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4000';

export default function* rootSaga() {
  yield all([fork(todoSaga)]);
}
