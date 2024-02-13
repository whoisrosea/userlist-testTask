import {
  DELETE_USER,
  EDIT_USER,
  LOAD_USERS_FAILURE,
  LOAD_USERS_SUCCESS,
} from "redux/constants/Users";

const users = [];

const usersReducer = (state = users, action) => {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return action.payload;
    case LOAD_USERS_FAILURE:
      return [];
    case EDIT_USER:
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    case DELETE_USER:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default usersReducer;
