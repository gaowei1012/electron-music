import * as React from "react";
import { connect } from "react-redux";
import actions from "../../../redux/actions";
class UserDetail extends React.PureComponent {
  state = {};
  componentDidMount() {}
  render() {
    return <></>;
  }
}
const mapStateToProps = (state) => ({
  message: state.detail,
});
const mapDispatchToProps = (dispatch) => ({
  getUserDetail: (url) => dispatch(actions.inLoadDetail(url)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
