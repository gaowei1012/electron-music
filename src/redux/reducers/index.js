import { combineReducers } from "redux";
import login from "./user/login";

const root = combineReducers({
  login,
});

export default root;
