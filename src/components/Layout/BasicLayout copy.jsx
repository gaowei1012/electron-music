import * as React from "react";
import { Layout } from "antd";

import "./index.scss";
import SideBar from "../sideBar/SideBar";
import HeaderContainer from "../header/Header";
// content中的内容
//  个性推荐
// import Banner from "../../view/personalRecommendation/banner";
// import PlayList from "../../view/personalRecommendation/recommendedPlayList";
// import ExclusiveList from "../../view/personalRecommendation/exclusiveBroadcast";
// import PlayVedio from "../../view/personalRecommendation/playVedio";
// 歌单

// 主播电台

// 排行榜

// 歌手

// 最新音乐
import MusicList from "../../view/latestMusic";

// import FooterContainer from "../../components/footer/Footer";

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends React.Component {
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
            <Content>
              <div className="content-box">
                {/* <Banner />
                <PlayList />
                <ExclusiveList />
                <PlayVedio /> */}
                <MusicList />
              </div>
            </Content>
            {/* <Content> {this.props.children}</Content> */}
          </Layout>
        </Layout>
        {/* <Footer>
          <FooterContainer />
        </Footer> */}
      </div>
    );
  }
}

export default BasicLayout;
