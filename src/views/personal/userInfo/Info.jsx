import * as React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { history } from "../../../router/history";
export default class UserInfo extends React.PureComponent {
  state = {
    token: "",
  };
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
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({
        token: token,
      });
    }
  }
  // 跳转页面
  handleItem = () => {
    const { token } = this.state;
    token ? history.push("/detail") : history.push("/login");
  };

  render() {
    const { name, avatar_url } = this.props;
    let goLogin = (
      <div className="login-box" onClick={() => this.handleItem()}>
        <div className="img-box">
          <img src={avatar_url} alt="用户头像" />
        </div>
        <div className="name">{name}</div>
      </div>
    );

    return <>{goLogin}</>;
  }
}
