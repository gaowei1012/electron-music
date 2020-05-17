import * as React from "react";
import List from "../../../components/list";
import { connect } from "react-redux";
import actions from "../../../redux/actions";
class exclusiveList extends React.PureComponent {
  componentDidMount() {
    const url = "/personalized/privatecontent";
    const { getList } = this.props;
    getList(url);
  }
  render() {
    const list = this.props.exclusiveList.item;
    if (!list) {
      return (
        <div>
          <span className="color-fff">加载中</span>
        </div>
      );
    }
    let renderList = (
      <>
        <List title={"独家放送"} list={list.result} />
      </>
    );
    return <>{renderList}</>;
  }
}

const mapStateToProps = (state) => ({
  // state.reducers中export的值
  exclusiveList: state.exclusiveList,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (url) => dispatch(actions.getList(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(exclusiveList);
