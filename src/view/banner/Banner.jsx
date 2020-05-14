import React from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./index.scss";

class Banner extends React.PureComponent {
  componentDidMount() {
    const url = "banner?type=1";
    const { getBanner } = this.props;
    getBanner(url, "GET");
  }

  render() {
    const banner = this.props.banner.item;

    const params = {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    };

    if (!banner) {
      return (
        <div>
          <span>加载中</span>
        </div>
      );
    }
    // console.log("banner", banner);
    let _renderArray = (
      <Swiper {...params}>
        {banner &&
          banner.map((item) => (
            <div key={item.encodeId}>
              <img src={item.pic} alt="" />
            </div>
          ))}
      </Swiper>
    );
    return <>{_renderArray}</>;
  }
}

const mapStateToProps = (state) => ({
  banner: state.banner,
});

const mapDispatchToProps = (dispatch) => ({
  getBanner: (url, methods) => dispatch(actions.getBanner(url, methods)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
