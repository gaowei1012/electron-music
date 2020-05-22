import * as React from "react";
import { connect } from "react-redux";
import actions from "../../../redux/actions";
import "./index.scss";
class List extends React.PureComponent {
  componentDidMount() {
    const limit = 4;
    const { getPaid } = this.props;
    const url = `/dj/paygift?limit=${limit}`;
    getPaid(url);
  }

  getParmas = (val) => {
    console.log("--" + val);
  };

  render() {
    const list = this.props.paidList.item;
    console.log("list", list);
    if (!list) {
      return <div>数据加载中</div>;
    }

    let _renderList = (
      <div>
        <div className="list-title">付费精品</div>
        <div className="flex-box">
          {list &&
            list.map((item, key) => {
              return (
                <div className="list-box" key={key}>
                  <div className="img-box">
                    <img src={item.picUrl} alt={item.name} />
                  </div>
                  <div className="content">
                    <div className="name">{item.name}</div>
                    <div>{item.rcmdText}</div>
                    <div>{item.lastProgramName}</div>
                    <div className="color-a42b23">
                      ￥{item.originalPrice / 100}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
    return <>{_renderList}</>;
  }
}

const mapStateToProps = (state) => ({
  paidList: state.paidList,
});

const mapDispatchToProps = (dispatch) => ({
  getPaid: (url) => dispatch(actions.getPaid(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
