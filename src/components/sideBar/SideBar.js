import * as React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import PersonalSvg from "../../assets/image/personal.svg";
import "./index.scss";
export default class SideBar extends React.PureComponent {
  state = {
    musicArray: [
      {
        id: 11,
        name: "发现音乐",
        icon: require("../../assets/svg/music.svg"),
        url: "/findMusic",
      },
      {
        id: 22,
        name: "私人FM",
        icon: require("../../assets/svg/diantai.svg"),
        url: "/playFM",
      },
      {
        id: 33,
        name: "视频",
        icon: require("../../assets/svg/vedio.svg"),
        url: "/playVedio",
      },
      {
        id: 44,
        name: "朋友",
        icon: require("../../assets/svg/friend.svg"),
        url: "/friend",
      },
    ],
    personalArray: [
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
    const { musicArray, personalArray } = this.state;
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
      <Menu>
        {musicArray &&
          musicArray.map((item) => {
            return (
              <Menu.Item key={item.id}>
                <div className="list">
                  {/* <Link to={item.url} replace> */}{" "}
                  {/*加一个replace是因为当前路由下的 history 不能 push 相同的路径到 stack 里。只有开发环境存在，生产环境不存在，目前还没看到官方有去掉的意思*/}
                  {/* <Icon type={item.icon} /> */}
                  <div className="img-box">
                    <img src={item.icon} alt="" />
                  </div>
                  <Link to={item.url} replace>
                    {""}
                    <span>{item.name}</span>
                  </Link>
                </div>
              </Menu.Item>
            );
          })}
      </Menu>
    );

    let renderMe = (
      <Menu>
        {personalArray &&
          personalArray.map((item) => {
            return (
              <Menu.Item key={item.id}>
                <div className="list">
                  {/*加一个replace是因为当前路由下的 history 不能 push 相同的路径到 stack 里。只有开发环境存在，生产环境不存在，目前还没看到官方有去掉的意思*/}
                  <div className="img-box">
                    <img src={item.icon} alt="" />
                  </div>
                  <Link to={item.url} replace>
                    {""}
                    <span>{item.name}</span>
                  </Link>
                </div>
              </Menu.Item>
            );
          })}
      </Menu>
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
