import * as React from "react";
import List from "../../components/list";
import { connect } from "react-redux";
import actions from "../../redux/actions";
class playVedio extends React.PureComponent {
  componentDidMount() {
    const url = "/personalized/mv";
    const { getVedio } = this.props;
    getVedio(url);
  }
  render() {
    const list = this.props.playVedio.item;
    if (!list) {
      return (
        <div>
          <span className="color-fff">加载中</span>
        </div>
      );
    }
    let renderList = (
      <>
        <List title={"推荐mv"} list={list.result} />
      </>
    );
    return <>{renderList}</>;
  }
}

const mapStateToProps = (state) => ({
  playVedio: state.playVedio,
});

const mapDispatchToProps = (dispatch) => ({
  getVedio: (url) => dispatch(actions.getVedio(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(playVedio);
