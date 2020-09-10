import { UPDATE_USERS } from "../actions/user";
import { combineReducers } from "redux";


const userById = (state = {}, action) => {
  const { payload, type } = action;
  switch (type) {
    case UPDATE_USERS:
      return payload.users.items.reduce((acc, val) => {
        return { ...acc, [val.id]: val };
      }, {});
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  const { payload, type } = action;
  switch (type) {
    case UPDATE_USERS:
      return payload.users.items.reduce((acc, val) => {
        return [...acc, val.id];
      }, []);
    default:
      return state;
  }
};

const userReducer = combineReducers({
  userById,
  allIds,
});


export default userReducer;
