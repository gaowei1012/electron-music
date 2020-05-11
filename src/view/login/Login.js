import React, {PureComponent} from "react";

class Login extends PureComponent {
  state = {};
  componentDidMount() {}
  _renderLogin() {
    return (
      <>
        <div>111</div>
      </>
    );
  }
  render() {
    return <>{this._renderLogin()}</>;
  }
}

export default Login;

