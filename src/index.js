import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./router/router";
import { Provider } from "react-redux";
import store from "./redux/store";
import "antd/dist/antd.css";
import * as serviceWorker from "./serviceWorker";
import "./style/common.scss";
import "./assets/icons"

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
