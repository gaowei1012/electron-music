import * as React from "react";
import { Link } from "react-router-dom";
import PersonalSvg from "../../assets/image/personal.svg";
import "./index.scss";
/**
 * 为了代码的整洁，请copy my codes
 * 渲染列表时候，必须使用 key
 */
export default class extends React.Component {
  state = {
    music: [
      {
        id: 11,
        name: "发现音乐",
        icon: require("../../assets/svg/music.svg"),
      },
      {
        id: 22,
        name: "私人FM",
        icon: require("../../assets/svg/diantai.svg"),
      },
      { id: 33, name: "视频", icon: require("../../assets/svg/vedio.svg") },
      {
        id: 44,
        name: "朋友",
        icon: require("../../assets/svg/friend.svg"),
      },
    ],
    personal: [
      {
        id: 55,
        name: "itunes音乐",
        icon: require("../../assets/svg/itunes.svg"),
      },
      {
        id: 66,
        name: "下载管理",
        icon: require("../../assets/svg/download.svg"),
      },
    ],
  };
  render() {
    const { music, personal } = this.state;
    let renderLogin = (
      <>
        <div className="login-box">
          <Link className="link" to="/login">
            <img
              className="login-img"
              src={PersonalSvg}
              width="26px"
              height="26px"
              alt=""
            />
            登录
          </Link>
        </div>
      </>
    );
    let renderMusic = (
      <>
        {music &&
          music.map((item) => (
            <div className="list" key={item.id}>
              <img src={item.icon} alt="" />
              <div className="name">{item.name}</div>
            </div>
          ))}
      </>
    );
    let renderMe = (
      <>
        <div className="my-music-title">
          <span>我的音乐</span>
        </div>
        {personal &&
          personal.map((item) => (
            <div className="list" key={item.id}>
              <img src={item.icon} alt="" />
              <div className="name">{item.name}</div>
            </div>
          ))}
      </>
    );

    return (
      <>
        {renderLogin}
        {renderMusic}
        {renderMe}
      </>
    );
  }
}
