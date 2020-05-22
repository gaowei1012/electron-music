import * as React from "react";
import { connect } from "react-redux";
import actions from "../../../redux/actions";
import "./index.scss";
// import List from "../../../components/list";
class RadioType extends React.PureComponent {
  state = {};
  componentDidMount() {
    const { getRadioType } = this.props;
    const url = "/dj/category/recommend";
    getRadioType(url);
  }

  render() {
    const list = this.props.radioType.item;
    if (!list) {
      return <div>数据加载中</div>;
    }

    let renderList = (
      <>
        {list.map((item, i) => {
          return (
            <div key={i}>
              <span className="list-title">{item.categoryName}</span>
              <div className="listBox">
                {item.radios.map((value) => {
                  return (
                    <div className="img-wap-box" key={value.id}>
                      <div className="img-box">
                        <img src={value.picUrl} alt="" />
                      </div>
                      <div className="name"> {value.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </>
    );
    return <>{renderList}</>;
  }
}
const mapStateToProps = (state) => ({
  radioType: state.radioType,
});
const mapDispatchToProps = (dispatch) => ({
  getRadioType: (url) => dispatch(actions.getRadioType(url)),
});
export default connect(mapStateToProps, mapDispatchToProps)(RadioType);
