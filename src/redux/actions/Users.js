import { DELETE_USER, EDIT_USER, LOAD_USERS_FAILURE, LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS,  } from "redux/constants/Users";



export const loadUsersRequest = () => ({
  type: LOAD_USERS_REQUEST,
});

export const loadUsersSuccess = (users) => ({
  type: LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersFailure = (error) => ({
  type: LOAD_USERS_FAILURE,
  payload: error,
});


export function editUser(editData) {
  return {
    type: EDIT_USER,
    payload: editData,
  };
}

export function deleteUser(id) {
  return {
    type: DELETE_USER,
    payload: id,
  };
}
