import * as React from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import Header from "../../components/header";
import LateraList from "../../components/lateralList";
class FindMusic extends React.PureComponent {
  state = {
    array: [
      {
        id: 0,
        title: "个性推荐",
      },
      {
        id: 1,
        title: "歌单",
      },
      {
        id: 2,
        title: "主播电台",
      },
      {
        id: 3,
        title: "排行榜",
      },
      {
        id: 4,
        title: "歌手",
      },
      {
        id: 5,
        title: "最新音乐",
      },
    ],
    limit: 10,
  };
  componentDidMount() {
    const { limit } = this.state;
    const url = `/personalized?limit=${limit}`;
    const { getPlayList } = this.props;
    getPlayList(url);
  }
  render() {
    const { array } = this.state;
    const lateraList = this.props.playList.item;
    console.log("lateraList:", lateraList);
    if (!lateraList) {
      return (
        <div>
          <span className="color-fff">加载中</span>
        </div>
      );
    }
    return (
      <>
        <Header array={array} />
        <LateraList list={lateraList} />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  playList: state.playList,
});
const mapDispatchToProps = (dispatch) => ({
  getPlayList: (url) => dispatch(actions.getPlayList(url)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FindMusic);
