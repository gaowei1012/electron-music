import { combineReducers } from "redux";
import login from "./login";
import banner from "./banner";
import playList from "./playList";
import exclusiveList from "./exclusiveList";

const root = combineReducers({
  login,
  banner,
  playList,
  exclusiveList,
});

export default root;
