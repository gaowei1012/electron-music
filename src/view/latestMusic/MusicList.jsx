import * as React from "react";
import List from "../../components/lists";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import "./index.scss";

class MusicList extends React.PureComponent {
  state = {
    array: [
      {
        id: 0,
        name: "全部",
        type: 0,
      },
      {
        id: 1,
        name: "华语",
        type: 7,
      },
      {
        id: 2,
        name: "欧美",
        type: 96,
      },
      {
        id: 3,
        name: "韩国",
        type: 16,
      },
      {
        id: 4,
        name: "日本",
        type: 8,
      },
    ],
  };
  componentDidMount() {
    this.getData();
  }

  getData = (type) => {
    if (!type) type = 0;
    const url = `http://localhost:3000/top/song?type=${type}`;
    const { getMusicList } = this.props;
    getMusicList(url);
  };
  // 点击item
  handleItem = (item) => {
    this.getData(item);
  };
  render() {
    const { array } = this.state;
    let navList = (
      <div className="navList">
        {array &&
          array.map((item) => {
            return (
              <div key={item.id} onClick={() => this.handleItem(item.type)}>
                {item.name}
              </div>
            );
          })}
      </div>
    );
    const list = this.props.latestMusic.item;
    if (!list) {
      return (
        <div>
          <span className="color-fff">加载中</span>
        </div>
      );
    }
    let renderList = (
      <>
        <List list={list} />
      </>
    );
    return (
      <>
        {navList}
        {renderList}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  latestMusic: state.latestMusic,
});

const mapDispatchToProps = (dispatch) => ({
  getMusicList: (url) => dispatch(actions.getMusicList(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicList);
