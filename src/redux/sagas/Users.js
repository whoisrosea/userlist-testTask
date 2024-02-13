import { call, put, takeEvery } from "redux-saga/effects";
import { loadUsersFailure, loadUsersSuccess } from "redux/actions/Users";
import { LOAD_USERS_REQUEST } from "redux/constants/Users";


function* fetchUsers() {
  try {
    const response = yield call(fetch, "https://jsonplaceholder.typicode.com/users");
    const data = yield response.json();
    yield put(loadUsersSuccess(data));
  } catch (error) {
    yield put(loadUsersFailure(error.toString()));
  }
}

function* userSaga() {
  yield takeEvery(LOAD_USERS_REQUEST, fetchUsers);
}

export default userSaga;
