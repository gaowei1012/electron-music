import React from "react";
import { Switch, Route, Router, Link } from "react-router-dom";
import { history } from "./history";

// import BasicLayout from "../components/Layout";
// import Login from "../view/login";

import Load from "../components/lazy";
const Login = Load(() => import("../view/login"));
const BasicLayout = Load(() => import("../components/Layout"));
const findMusic = Load(() => import("../view/findMusic/find"));

export default class MyRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={BasicLayout} />
          <Route path="/login" component={Login} />
          <Route path="/findMusic" component={findMusic} />
          {/* 
          <Route path="/playVedio" component={playVedio} />
          <Route path="/friend" component={friend} /> */}
        </Switch>
      </Router>
    );
  }
}
