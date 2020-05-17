import { combineReducers } from "redux";
import login from "./login";
import banner from "./banner";
import playList from "./playList";
import exclusiveList from "./exclusiveList";
import playVedio from "./playVedio";
import latestMusic from "./latest";
import stationBanner from "./stationBanner";
const root = combineReducers({
  login,
  banner,
  playList,
  exclusiveList,
  playVedio,
  latestMusic,
  stationBanner,
});

export default root;
