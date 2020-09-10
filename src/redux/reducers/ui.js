import { UPDATE_USERS, GET_USERS } from "../actions/user";
import { combineReducers } from "redux";

const userName = (state = "", action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload.user;
    default:
      return state;
  }
};

const loadingUsers = (state = true, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      return false;
    default:
      return state;
  }
};

const uiReducer = combineReducers({
  userName,
  loadingUsers,
});

export default uiReducer;
