import * as React from "react";
import { connect } from "react-redux";
import actions from "../../../redux/actions";
import SvgIcon from "../../../components/SvgIcon";
import "./detail.scss";
import { history } from "../../../router/history";
import { removeItem } from "../../../js/auth";

class UserDetail extends React.PureComponent {
  state = {
    infoArray: [
      {
        id: 0,
        count: 10,
        desc: "动态",
      },
      {
        id: 1,
        count: 17,
        desc: "关注",
      },
      {
        id: 2,
        count: 19,
        desc: "粉丝",
      },
    ],
    settinArray: [
      {
        id: 0,
        icon: "settings",
        desc: "个人信息设置",
      },
      {
        id: 1,
        icon: "loginout",
        desc: "退出登录",
      },
    ],
  };

  handleItem = (desc) => {
    if (desc === "动态") {
      history.push("/dynamic");
    } else if (desc === "关注") {
      history.push("/attention");
    } else if (desc === "粉丝") {
      history.push("/fan");
    } else if (desc === "个人信息设置") {
      history.push("/settings");
      // history.push({
      //   pathname: "/settings",
      //   state: { profile: userInfo.item.profile },
      // });
    } else if (desc === "退出登录") {
      this.loginOut();
    }
  };
  // 退出登录
  loginOut = () => {
    console.log("退出登录了");
    const { goExit } = this.props;
    const loginoutUrl = `logout`;
    goExit(loginoutUrl);
    const exitResult = this.props.exit.item;
    if (!exitResult) {
    } else {
      if (exitResult.code === 200) {
        removeItem("userid");
        removeItem("token");
      }
    }
  };

  render() {
    const { infoArray, settinArray } = this.state;
    const state = history.location.state;
    if (!state) {
      return <div>页面传值失败</div>;
    }

    const profile = state.profile;
    let renderInfo = (
      <div className="content-box">
        <div className="info bdb-373737">
          {infoArray &&
            infoArray.map((item) => {
              return (
                <div
                  key={item.id}
                  className="box"
                  onClick={() => this.handleItem(item.desc)}
                >
                  <div>{item.desc}</div>
                  {item.desc === "动态" && <div>{profile.eventCount}</div>}
                  {item.desc === "关注" && <div>{profile.follows}</div>}
                  {item.desc === "粉丝" && <div>{profile.followeds}</div>}
                </div>
              );
            })}
        </div>
        <div className="settings bdb-373737">
          {settinArray &&
            settinArray.map((item) => {
              return (
                <div
                  className="content"
                  key={item.id}
                  onClick={() => this.handleItem(item.desc)}
                >
                  <div className="icon">
                    <SvgIcon iconClass={item.icon} />
                  </div>
                  <div>{item.desc}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
    return <>{renderInfo}</>;
  }
}
const mapStateToProps = (state) => ({
  exit: state.exit,
  loginState: state.loginState,
});
const mapDispatchToProps = (dispatch) => ({
  goExit: (url) => dispatch(actions.goLoginout(url)),
  getLoginState: (url) => dispatch(actions.getLoginState(url)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
