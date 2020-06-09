import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { history } from "./history";

import Load from "../components/lazy";
const Login = Load(() => import("../view/login"));
const BasicLayout = Load(() => import("../components/Layout"));
const FindMusic = Load(() => import("../view/findMusic"));

export default class MyRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={BasicLayout} />
          <Route path="/login" component={Login} />
          <Route path="/find" component={FindMusic} />
        </Switch>
      </Router>
    );
  }
}
