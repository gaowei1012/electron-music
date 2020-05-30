import * as React from "react";
import { Layout } from "antd";

import "./index.scss";
import SideBar from "../../components/sideBar/SideBar";
import HeaderContainer from "../../components/header/Header";
// content中的内容
//  个性推荐
// import Banner from "../../view/personalRecommendation/banner";
// import PlayList from "../../view/personalRecommendation/recommendedPlayList";
// import ExclusiveList from "../../view/personalRecommendation/exclusiveBroadcast";
// import PlayVedio from "../../view/personalRecommendation/playVedio";
// 歌单

// 主播电台
// import StationBanner from "../../view/anchorStation/banner";
// import PaidBoutique from "../../view/anchorStation/paidBoutique";
// import RadioType from "../../view/anchorStation/radioType";
// 排行榜

// 歌手
import ArtistList from "../../view/artistList";
// 最新音乐
// import MusicList from "../../view/latestMusic";

// import FooterContainer from "../../components/footer/Footer";

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Sider, Content } = Layout;
// const { Header, Footer, Sider, Content } = Layout;

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
                {/* <StationBanner />
                <PaidBoutique />
                <RadioType /> */}

                {/* <MusicList /> */}
                <ArtistList />
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
