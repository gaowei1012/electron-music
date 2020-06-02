import * as React from "react";
import { Layout } from "antd";

import "./index.scss";
import SideBar from "../sideBar/SideBar";
import HeaderContainer from "../header/Header";
// content中的内容
import ArtistList from "../../view/artistList";

// Header, Footer, Sider, Content组件在Layout组件模块下
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
            <Content> {this.props.children}</Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
