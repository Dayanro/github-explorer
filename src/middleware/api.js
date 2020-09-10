import { GET_USERS } from "../redux/actions/user";
import { getUsersSuccess, getUsersError } from "../redux/actions/user";

const api = ({ dispatch, getState }) => (next) => (action) => {
  const name = action.payload.user;
  if (action.type !== GET_USERS) {
    return next(action);
  }
  fetch(`https://api.github.com/search/users?q=${name}&per_page=20`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      return dispatch(getUsersSuccess(data));
    })
    .catch((error) => {
      dispatch(getUsersError(error));
      throw error;
    });
};

export default api;
