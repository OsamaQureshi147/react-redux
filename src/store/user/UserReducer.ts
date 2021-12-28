import { UsersActionTypes } from "../redux/actionTypes";

const INITIAL_STATE: UserState = {
  loading: false,
  users: [],
};

interface Action {
  payload: any;
  type: string;
}

const UserReducer = (
  state: UserState = INITIAL_STATE,
  action: Action
): UserState => {
  switch (action.type) {
    case UsersActionTypes.USER_LIST_START: {
      return { ...state, loading: true };
    }
    case UsersActionTypes.USER_LIST_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    }
    case UsersActionTypes.USER_LIST_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case UsersActionTypes.EDIT_USER_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    }
    case UsersActionTypes.DELETE_USER_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default UserReducer;
