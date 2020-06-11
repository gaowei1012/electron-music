import React, { PureComponent } from "react";
import { Input, Button } from "antd";
import "./login.scss";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import ReactLoading from 'react-loading';

class Login extends PureComponent {
  state = {
    phone: "13666683140",
    pwd: "qq12345..**",
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
  //登录
  async getData() {
    const { goLogin } = this.props;
    const { phone, pwd } = this.state;
    const url = `login/cellphone?phone=${phone}&password=${pwd}`;
    const { result } = await goLogin(url);
    console.log("result:", result);
  }
  // getData = async () => {
  //   const { goLogin } = this.props;
  //   const { phone, pwd } = this.state;
  //   const url = `login/cellphone?phone=${phone}&password=${pwd}`;
  //   const { result } = await goLogin(url);
  //   console.log("result:", result);
  // };

  // TODO:第一次点击item为undefined，第二次点击才有值

  handleLogin = () => {
    /**
     * 点击登录后，获取接口返回值并且带参跳转到首页
     */
    this.getData();
    // const item = this.props.token.item;
    // if (!item) {
    //   console.log("请稍后");
    // }
    // console.log("item", item);
  };

  render() {
    let _renderLogin = (
      <div className="loginCOntainer">
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
