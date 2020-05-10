import * as React from "react";
// import { request } from "../js/request";
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
  _renderList = () => {
    const { array } = this.state;
    return (
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
  };

  render() {
    return <>{this._renderList()}</>;
  }
}
