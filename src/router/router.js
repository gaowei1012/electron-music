import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { history } from "./history";

import Load from "../components/lazy";
const BasicLayout = Load(() => import("../components/Layout"));
const Login = Load(() => import("../views/personal/login"));
const Detail = Load(() => import("../views/personal/detail"));
const Dynamic = Load(() =>
  import("../views/personal/detail/components/dynamic")
);
const Attention = Load(() =>
  import("../views/personal/detail/components/attention")
);
const Fan = Load(() => import("../views/personal/detail/components/fan"));
const Settings = Load(() =>
  import("../views/personal/detail/components/settings")
);

export default class MyRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={BasicLayout} />
          <Route name="登录" path="/login" component={Login} />
          <Route name="用户详情" path="/detail" component={Detail} />
          <Route name="动态" path="/dynamic" component={Dynamic} />
          <Route name="关注" path="/attention" component={Attention} />
          <Route name="粉丝" path="/fan" component={Fan} />
          <Route name="设置" path="/settings" component={Settings} />
        </Switch>
      </Router>
    );
  }
}
