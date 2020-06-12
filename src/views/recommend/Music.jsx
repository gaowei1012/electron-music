import * as React from "react";
import { Menu } from "antd";
import "./music.scss";
import SvgIcon from "../../components/SvgIcon";
export default class Music extends React.PureComponent {
  state = {
    musicArray: [
      {
        id: 11,
        name: "发现音乐",
        icon: "music",
        url: "/Find",
      },
      {
        id: 22,
        name: "私人FM",
        icon: "diantai",
        url: "/playFM",
      },
      {
        id: 33,
        name: "视频",
        icon: "vedio",
        url: "/playVedio",
      },
      {
        id: 44,
        name: "朋友",
        icon: "friend",
        url: "/friend",
      },
    ],
  };
  render() {
    const { musicArray } = this.state;
    let renderMusic = (
      <Menu>
        {musicArray &&
          musicArray.map((item) => {
            return (
              <Menu.Item key={item.id}>
                <div className="list">
                  <div className="img-box">
                    <SvgIcon iconClass={item.icon} />
                  </div>
                  <span>{item.name}</span>
                </div>
              </Menu.Item>
            );
          })}
      </Menu>
    );
    return <>{renderMusic}</>;
  }
}
