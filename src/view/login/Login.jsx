import React, { PureComponent } from "react";
import { Input, Button } from "antd";
import "./index.scss";
// import { UserOutlined } from "@ant-design/icons";
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
  componentDidMount() {}
  // _openDialog = () => {
  //   dialog.showOpenDialog();
  // };

  // 返回上一级
  handleBack = () => {
    window.history.back(-1);
  };
  // 登录
  handleLogin = () => {};
  // 输入框信息
  changeInput = (e) => {
    console.log("111", e);
  };
  _renderLogin() {
    return (
      <>
        <div onClick={this.handleBack}>返回</div>
        <div className="login-box1">
          <div className="box">
            {/* onClick={() => this.handleItem(item.id, item.title)} */}
            {/* <Input placeholder="请输入手机号" prefix={<UserOutlined />} /> */}
            <Input placeholder="请输入手机号" onChange={this.changeInput} />
            <Input.Password placeholder="请输入密码" />
          </div>
          <Button onClick={this.handleLogin}>登录</Button>
        </div>
      </>
    );
  }
  render() {
    return (
      <>
        {this._renderLogin()}
        {/* {this._openDialog()} */}
      </>
    );
  }
}

export default Login;
