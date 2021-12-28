import { combineReducers } from "redux";

import user from "../user/UserReducer";

const reducers = combineReducers({
  user,
});

export default reducers;
