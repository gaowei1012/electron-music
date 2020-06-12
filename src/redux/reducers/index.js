import { combineReducers } from "redux";
import login from "./user/login";
import exit from "./user/loginout";
import loginState from "./user/loginState";
// import userInfo from "./user/info";
import songList from "./song/songList";

const root = combineReducers({
  login,
  exit,
  loginState,
  // userInfo,
  songList,
});

export default root;
