import { combineReducers } from "redux";
import login from "./login";
import banner from "./banner";
import playList from "./playList";
import exclusiveList from "./exclusiveList";
import playVedio from "./playVedio";
import latestMusic from "./latest";
import stationBanner from "./stationBanner";
import paidList from "./paidBoutique";
import radioType from "./radioType";

const root = combineReducers({
  login,
  banner,
  playList,
  exclusiveList,
  playVedio,
  latestMusic,
  stationBanner,
  paidList,
  radioType,
});

export default root;
