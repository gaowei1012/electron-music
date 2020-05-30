import * as React from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import "./index.scss";
import List from "../../components/list";

class ArtistList extends React.PureComponent {
  state = {
    type: "",
    area: "",
    initial: "",
    // 语种
    language: [
      {
        id: -1,
        title: "全部",
      },
      {
        id: 7,
        title: "华语",
      },
      {
        id: 96,
        title: "欧美",
      },
      {
        id: 8,
        title: "日本",
      },
      {
        id: 16,
        title: "韩国",
      },
      {
        id: 0,
        title: "其他",
      },
    ],
    // 分类
    classification: [
      {
        id: -1,
        title: "全部",
      },
      {
        id: 1,
        title: "男歌手",
      },
      {
        id: 2,
        title: "女歌手",
      },
      {
        id: 3,
        title: "乐队组合",
      },
    ],
    // 字母
    letter: [
      "热门",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "k",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "#",
    ],
  };

  componentDidMount() {
    this.getData();
  }
  // 获取数据
  getData() {
    const { type, area, initial } = this.state;
    console.log("type", type);
    console.log("area", area);
    console.log("initial", initial);

    const { getArtistList } = this.props;
    // http://localhost:3000/artist/list?type=1&area=7&initial=#
    const url = `/artist/list?type=${type}&area=${area}&initial=${initial}`;
    getArtistList(url);
  }
  // 点击语种
  handleLanguage(index) {
    this.setState({
      type: index,
    });
    this.getData();
  }
  // 点击分类
  handleType(letter) {
    this.setState({
      area: letter,
    });
    this.getData();
  }
  // 点击筛选
  handleLetter(letter) {
    this.setState({
      initial: letter,
    });
    this.getData();
  }

  render() {
    const {
      type,
      area,
      initial,
      language,
      classification,
      letter,
    } = this.state;
    const list = this.props.artistList.item;
    // "GET_ARTIST_LIST_SUCCESS"
    console.log("artistList:", list);
    let renderLanguage = (
      <div className="navItem">
        <div className="title">语种:</div>
        <div className="box">
          {language &&
            language.map((item) => {
              return (
                <div
                  className="item"
                  key={item.id}
                  onClick={() => this.handleLanguage(item.id)}
                >
                  <div className={` ${type === item.id ? "active" : ""}`}>
                    {item.title}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );

    let renderClassification = (
      <div className="navItem">
        <div className="title">分类:</div>
        <div className="box">
          {classification &&
            classification.map((item) => {
              return (
                <div
                  className="item"
                  key={item.id}
                  onClick={() => this.handleType(item.id)}
                >
                  <div className={` ${area === item.id ? "active" : ""}`}>
                    {item.title}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );

    let renderLetter = (
      <div className="navItem">
        <div className="title">筛选:</div>
        <div className="box">
          {letter &&
            letter.map((item, index) => {
              return (
                <div
                  className="item"
                  key={index}
                  onClick={() => this.handleLetter(index)}
                >
                  <div className={` ${initial === index ? "active" : ""}`}>
                    {item}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );

    if (!list) {
      return <div>正在加载。。。</div>;
    }

    let renderSinger = <List list={list} />;

    return (
      <>
        {renderLanguage}
        {renderClassification}
        {renderLetter}
        {renderSinger}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  artistList: state.artistList,
});
const mapDispatchToProps = (dispatch) => ({
  getArtistList: (url) => dispatch(actions.getArtistList(url)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ArtistList);
