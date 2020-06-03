import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { history } from "./history";

import Load from "../components/lazy";
let Login = Load(() => import("../view/login"));
// const BasicLayout = Load(() => import("../components/Layout"));
const findMusic = Load(() => import("../view/findMusic/find"));

export default class MyRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/findMusic" component={findMusic} />
          {/* 
          <Route path="/playVedio" component={playVedio} />
          <Route path="/friend" component={friend} /> */}
        </Switch>
      </Router>
    );
  }
}
