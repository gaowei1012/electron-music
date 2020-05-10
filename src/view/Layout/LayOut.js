import * as React from "react";
import { Layout } from "antd";

import "./index.scss";
import SideBar from "../../components/sideBar/SideBar";

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends React.Component {
  render() {
    return (
      <Layout className="layOut">
        <Sider className="left-layout-sider">
          <SideBar />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>content</Content>
          {/* <Content> {this.props.children}</Content> */}
          <Footer>
            <span className="footer">Footer</span>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
