import * as React from "react";
import { Layout } from "antd";
import SideBar from "../sideBar";
import "./index.scss"

const { Sider, Content } = Layout;


export default class BasicLayout extends React.Component {
  render() {
    return (
      <div>
        <Layout className="layOut">
          <Sider className="left-layout-sider">
            <SideBar />
          </Sider>
          <Layout>
            <Content>{this.props.children || "Welcome to your music"}</Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
