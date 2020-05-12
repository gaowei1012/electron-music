import * as React from "react";
import "./index.scss";
export default class extends React.PureComponent {
  state = {
    array: [
      {
        id: 0,
        title: "个性推荐",
      },
      {
        id: 1,
        title: "歌单",
      },
      {
        id: 2,
        title: "主播电台",
      },
      {
        id: 3,
        title: "排行榜",
      },
      {
        id: 4,
        title: "歌手",
      },
      {
        id: 5,
        title: "最新音乐",
      },
    ],
  };
  componentDidMount() {}
  handleItem = (id, title) => {
    console.log("id", id);
    console.log("title", title);
  };
  render() {
    const { array } = this.state;
    let renderList = (
      <div className="list-box">
        {array &&
          array.map((item) => (
            <div
              className="list"
              key={item.id}
              onClick={() => this.handleItem(item.id, item.title)}
            >
              <div className="name">{item.title}</div>
            </div>
          ))}
      </div>
    );

    return <>{renderList}</>;
  }
}
