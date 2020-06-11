import * as React from "react";
import UserInfo from "./userInfo";
export default class extends React.PureComponent {
  render() {
    return (
      <>
        {/* <UserInfo username={item.nickname} avatar_url={item.avatarUrl} /> */}
        <UserInfo/>
        {/* <PersonalItem.login-box /> */}
      </>
    );
  }
}
