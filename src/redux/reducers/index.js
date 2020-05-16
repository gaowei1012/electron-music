import { combineReducers } from "redux";
import login from "./login";
import banner from "./banner";
import playList from "./playList";
import exclusiveList from "./exclusiveList";
import playVedio from "./playVedio";
const root = combineReducers({
  login,
  banner,
  playList,
  exclusiveList,
  playVedio,
});

export default root;
