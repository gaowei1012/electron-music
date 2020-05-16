import * as React from "react";
import List from "../../components/list";
import { connect } from "react-redux";
import actions from "../../redux/actions";
class PlayList extends React.PureComponent {
  state = {
    limit: 10,
  };
  componentDidMount() {
    const { limit } = this.state;
    const url = `/personalized?limit=${limit}`;
    const { getPlayList } = this.props;
    getPlayList(url);
  }
  render() {
    const list = this.props.playList.item;
    if (!list) {
      return (
        <div>
          <span className="color-fff">加载中</span>
        </div>
      );
    }
    let renderList = (
      <>
        <List title={"推荐歌单"} list={list.result} />
      </>
    );
    return <>{renderList}</>;
  }
}

const mapStateToProps = (state) => ({
  // state.reducers中export的值
  playList: state.playList,
});

const mapDispatchToProps = (dispatch) => ({
  getPlayList: (url) => dispatch(actions.getPlayList(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);
