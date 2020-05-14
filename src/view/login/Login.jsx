import React, { PureComponent } from "react";
import { Input, Button } from "antd";
import "./index.scss";
import { connect } from "react-redux";
import actions from "../../redux/actions";

// const {
//   app,
//   BrowserWindow,
//   globalShortcut,
//   dialog,
//   Menu,
//   ipcMain,
// } = require("electron");
// const path = require("path");

// let mainWindow;
// const { dialog } = require("electron");
class Login extends PureComponent {
  state = {
    phone: "",
    pwd: "",
  };

  // 返回上一级
  handleBack = () => {
    window.history.back(-1);
  };
  // 输入框信息
  handleGetInputValue = () => {
    const phone = document.getElementById("phone").value;
    const pwd = document.getElementById("pwd").value;
    this.setState({
      phone: phone,
      pwd: pwd,
    });
  };
  //登录
  handleLogin = () => {
    console.log("即将登录...");
    const { phone, pwd } = this.state;
    const { goLogin } = this.props;
    const url = `login/cellphone?phone=${phone}&password=${pwd}`;
    goLogin(url, "GET");
    // this.routerHome();
  };

  // 登录成功后跳转到首页
  routerHome = () => {
    console.log("111");
    this.handleLogin();

    const LoginRes = this.props.login.item;
    console.log("LoginRes:", LoginRes);
    /**
     * loginRes中的值传到sideBar并且将值保存到本地内存当中
     */
  };

  _renderLogin() {
    return (
      <>
        <div onClick={this.handleBack}>返回</div>
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
      </>
    );
  }
  render() {
    return <>{this._renderLogin()}</>;
  }
}

// export default Login;
// state resucers con
const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch) => ({
  goLogin: (url, methods, data) =>
    dispatch(actions.goLogin(url, methods, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
