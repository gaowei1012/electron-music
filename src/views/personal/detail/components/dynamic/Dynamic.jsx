import * as React from "react";
import { connect } from "react-redux";
import actions from "../../../../../redux/actions";
import { getItem } from "../../../../../js/auth";

class Dynamic extends React.PureComponent {
  state = {};
  componentDidMount() {
    const uid = getItem("userid");
    if (!uid) {
      console.log("无法获取uid");
      return;
    }
    console.log("uid", uid);
    // const { getDynamicInfo } = this.props;
    // const url = `/user/event?uid=${uid}`;
    // getDynamicInfo(url);
  }
  render() {
    return <div>动态</div>;
  }
}
const mapStateToProps = (state) => ({
  dynamicInfo: state.dynamicInfo,
});
const mapDispatchToProps = (dispatch) => ({
  getDynamicInfo: (url) => dispatch(actions.getDynamicInfo(url)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dynamic);
