import { combineReducers } from "redux";
import login from "./login";
import banner from "./banner";

const root = combineReducers({
  login,
  banner,
});

export default root;
