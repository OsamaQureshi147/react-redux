import { User } from "../../models/User";
import { UsersActionTypes } from "../redux/actionTypes";

export const getUserList = () => {
  return (dispatch: any) => {
    dispatch({
      type: UsersActionTypes.USER_LIST_START,
    });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        getUserListSuccess(dispatch, json);
      })

      .catch(() => {
        getUserListFail(dispatch, "There was an error connection");
      });
  };
};

const getUserListFail = (dispatch: any, errorMessage: string) => {
  dispatch({
    type: UsersActionTypes.USER_LIST_FAIL,
    payload: {
      errorMessage,
    },
  });
};

const getUserListSuccess = (dispatch: any, data: any) => {
  dispatch({
    type: UsersActionTypes.USER_LIST_SUCCESS,
    payload: data,
  });
};

export const editUser = (user: User[]) => {
  return {
    type: UsersActionTypes.EDIT_USER_SUCCESS,
    payload: user,
  };
};
export const deleteUser = (user: User[]) => {
  return {
    type: UsersActionTypes.DELETE_USER_SUCCESS,
    payload: user,
  };
};
