export const GET_USERS = 'GET_USERS'
export const UPDATE_USERS = "UPDATE_USERS";
export const GET_USER = 'GET_USER'


export const getUsers = (user) => {
  return {
    type: GET_USERS,
    payload: { user },
  };
};

export const getUsersSuccess = (users) => {
  return {
    type: UPDATE_USERS,
    payload: { users },
  };
}

export const getUsersError = (error) => {
  return {
    type: UPDATE_USERS,
    payload: { error },
  };
}