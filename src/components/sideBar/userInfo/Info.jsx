import * as React from "react";

import PropTypes from "prop-types";
import "./index.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../../redux/actions";

class Info extends React.PureComponent {
  static defaultProps = {
    name: "还好",
    avatar_url:
      "https://tse1-mm.cn.bing.net/th/id/OIP.SYF7F3QpQaX0jvThEZFU1wHaEk?pid=Api&rs=1",
  };
  static propTypes = {
    name: PropTypes.string.isRequired, //.isRequired 必传
    avatar_url: PropTypes.string,
  };
  componentDidMount() {
    // if (!item) {
    const { goLogin } = this.props;
    const url = "login/cellphone?phone=13666683140&password=qq12345..**";
    goLogin(url);
    // }
  }
  // 跳转页面
  handleItem = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("未获取到token");
      // this.props.history.push("/login");

      // this.props.history.push({
      //   pathname: "/login",
      // });
      // this.props.history.push("/login");
    } else {
      console.log("token值为:", token);
    }
  };

  render() {
    // const { avatar_url, name } = this.props;
    // const item = this.props.token.item;
    // console.log("item", item);
    // console.log("nickname", item.profile.nickname);
    // console.log("avatarUrl", item.profile.avatarUrl);
    // console.log("token", item.token);
    const token = localStorage.getItem("token");
    console.log("token", token);
    let goLogin = (
      <Link to="/login">
        <div className="login-box" onClick={() => this.handleItem()}>
          <div className="img-box">
            <img src={this.props.avatar_url} alt="用户头像" />
          </div>
          <div className="name">{this.props.name}</div>
        </div>
      </Link>
    );

    return <>{goLogin}</>;
  }
}
const mapStateToProps = (state) => ({
  token: state.login,
});

const mapDispatchToProps = (dispatch) => ({
  goLogin: (url) => dispatch(actions.onLoginAction(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Info);
