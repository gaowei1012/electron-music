import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { history } from "./history";

// import Home from "../view/home/Home";
import LayOut from "../view/Layout/LayOut";

export default class MyRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={LayOut} />
          {/* <Route path="/" exact component={Home} /> */}
          {/* <Route path="/list" component={List} />
          <Route path="/clist" component={Clist} /> */}
        </Switch>
      </Router>
    );
  }
}
