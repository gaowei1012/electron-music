import * as React from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import { getItem } from "../../js/auth";

class songList extends React.PureComponent {
  state = {};
  componentDidMount() {
    const uid = getItem("userid");
    if (!uid) {
      console.log("请先去登录");
      return;
    }
    const { getList } = this.props;
    const url = `user/playlist?uid=${uid}`;
    getList(url);
  }
  render() {
    const { list } = this.props;
    if (!list.item) {
      return <div>正在加载中...</div>;
    }
    const array = list.item.playlist;
    let renderList = (
      <>
        {array &&
          array.map((item) => {
            return (
              <div key={item.coverImgId}>

                <div>{item.name}</div>
              </div>
            );
          })}
      </>
    );
    return <>{renderList}</>;
  }
}
const mapStateToProps = (state) => ({
  list: state.songList,
});
const mapDispatchToProps = (dispatch) => ({
  getList: (url) => dispatch(actions.getSongList(url)),
});
export default connect(mapStateToProps, mapDispatchToProps)(songList);
