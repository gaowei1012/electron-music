import * as React from "react";
import UserInfo from "../../views/personal/userInfo";
import RecommendInfo from "../../views/recommend";
import SongList from "../../views/songList";
import { history } from "../../router/history";

export default class extends React.PureComponent {
  state = {
    item: {},
  };
  componentDidMount() {
    const state = history.location.state;
    if (state) {
      this.setState({
        item: state.userInfo.profile,
      });
    }
  }
  render() {
    const { item } = this.state;
    if (!item) {
      console.log("用户信息不存在");
    }
    return (
      <>
        <UserInfo
          name={item.nickname}
          avatar_url={item.avatarUrl}
          userInfo={item}
        />
        <RecommendInfo />
        <SongList />
      </>
    );
  }
}
