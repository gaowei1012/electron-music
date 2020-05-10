import * as React from "react";
// import { request } from "../../utils/request";
import axios from "axios";
export default class Home extends React.Component {
  state = {
    array: [],
  };
  componentDidMount() {
    axios.get("https://cnodejs.org/api/v1/topics").then((res) => {
      const data = res.data.data;
      console.log("res:", data);
      this.setState({
        array: data,
      });
    });
  }

  // render function

  render() {
    const { array } = this.state;
    // 渲染列表数据
    // 定义返回 jsx ， 页面直接使用
    let renderList = (
      <>
        {array &&
          array.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.title}</p>
              </div>
            );
          })}
      </>
    );
    // 返回 jsx
    return <>{renderList}</>;
  }
}
