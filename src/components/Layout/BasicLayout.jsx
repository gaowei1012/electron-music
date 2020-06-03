import * as React from "react";
import { Layout } from "antd";

import "./index.scss";
// import Routes from "../../router/router";

import SideBar from "../sideBar/SideBar";
import HeaderContainer from "../header/Header";
// import ContentContainer from "../content"
const { Header, Sider, Content } = Layout;

export default class BasicLayout extends React.Component {
  render() {
    return (
      <div>
        <Layout className="layOut">
          <Sider className="left-layout-sider">
            <SideBar />
          </Sider>
          <Layout>
            <Header>
              <HeaderContainer />
            </Header>
            <Content>{this.props.children || "Welcome to your music"}</Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
