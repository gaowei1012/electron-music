


import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { history } from "./history";

import Load from "../components/lazy";
const BasicLayout = Load(() => import("../components/Layout"));
const Login = Load(() => import("../views/personal/login"));
const Detail = Load(() => import("../views/personal/detail"));

export default class MyRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={BasicLayout} />
          <Route path="/login" component={Login} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </Router>
    );
  }
}
