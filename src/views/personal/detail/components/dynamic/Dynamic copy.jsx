import * as React from "react";
import { history } from "../../../../../router/history";
export default class Dynamic extends React.PureComponent {
  state = {};
  componentDidMount() {
    const uid = localStorage.getItem("userid");
    if (!uid) {
      console.log("无法获取uid");
      return;
    }
    const 
  }
  render() {
    // const state = history.location.state;
    // console.log("eventCount:", state.eventCount);

    let renderSettings = <div>动态</div>;
    return <>{renderSettings}</>;
  }
}
