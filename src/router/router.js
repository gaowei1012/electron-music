import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { history } from "./history";

import BasicLayout from "../components/Layout";
import Login from "../view/login/index";

export default class MyRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={BasicLayout} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}
