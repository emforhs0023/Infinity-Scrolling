import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import user from './user';
import post from './post';

axios.defaults.baseURL = 'http://127.0.0.1:3065/api';

export default function* rootSaga() {
	yield all([
	    fork(user),
	    fork(post),
  	]);
}