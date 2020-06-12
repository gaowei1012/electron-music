import React, { PureComponent } from "react";
import { Input, Button, Spin } from "antd";
import "./login.scss";
import { connect } from "react-redux";
import actions from "../../../redux/actions";
import { history } from "../../../router/history";

class Login extends PureComponent {
  state = {
    phone: "13666683140",
    pwd: "qq12345..**",
    isLoading: false,
  };

  // 返回上一级
  handleBack = () => {
    window.history.back(-1);
  };
  // 获取输入框信息
  handleGetInputValue = () => {
    const phone = document.getElementById("phone").value;
    const pwd = document.getElementById("pwd").value;
    this.setState({
      phone: phone,
      pwd: pwd,
    });
  };

  // TODO:第一次点击item为undefined，第二次点击才有值
  handleLogin = () => {
    const { goLogin } = this.props;
    const { phone, pwd } = this.state;
    const url = `login/cellphone?phone=${phone}&password=${pwd}`;
    goLogin(url);
    this.setState({
      isLoading: true,
    });
    const token = this.props.token;
    const item = token.item;
    if (token.isLoading === false) {
      localStorage.setItem("token", item.token);
      localStorage.setItem("userid", item.profile.userId);
      this.setState({
        isLoading: false,
      });
      history.push({
        pathname: "/",
        state: { userInfo: item },
      });
    }
  };

  render() {
    const { isLoading } = this.state;

    let _renderLogin = (
      <div className="loginCOntainer">
        <div onClick={this.handleBack}>返回</div>
        <div className="example">
          <Spin spinning={isLoading} size="large" tip="正在登陆中，请稍后..." />
        </div>
        <div className="login-box1">
          <div className="box">
            <Input
              id="phone"
              placeholder="请输入手机号"
              onChange={this.handleGetInputValue}
            />
            <Input.Password
              id="pwd"
              placeholder="请输入密码"
              onChange={this.handleGetInputValue}
            />
          </div>
          <Button onClick={this.handleLogin}>登录</Button>
        </div>
      </div>
    );
    return <>{_renderLogin}</>;
  }
}

const mapStateToProps = (state) => ({
  token: state.login,
});

const mapDispatchToProps = (dispatch) => ({
  goLogin: (url) => dispatch(actions.onLoginAction(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
