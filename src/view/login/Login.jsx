import React, { PureComponent } from "react";

class Login extends PureComponent {
  state = {};
  componentDidMount() {}

  handleBack() {
    window.history.back(-1);
    // this.history.goback
  }

  _renderLogin() {
    return (
      <>
        {/* history.goback */}
        <div onClick={this.handleBack}>返回</div>
        <div>111</div>
      </>
    );
  }
  render() {
    return <>{this._renderLogin()}</>;
  }
}

export default Login;
