import * as React from "react";
import { connect } from "react-redux";
import actions from "../../../redux/actions";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

class Banner extends React.PureComponent {
  componentDidMount() {
    const url = "/dj/banner";
    const { getBanner } = this.props;
    getBanner(url);
  }
  render() {
    const result = this.props.banner.item;
    const params = {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    };

    if (!result) {
      return (
        <div>
          <span className="color-fff">加载中</span>
        </div>
      );
    }
    let renderBanner = (
      <Swiper {...params}>
        {result &&
          result.map((item, index) => (
            <div key={index}>
              <img src={item.pic} alt={item.typeTitle} />
            </div>
          ))}
      </Swiper>
    );
    return <>{renderBanner}</>;
  }
}

const mapStateToProps = (state) => ({
  banner: state.stationBanner,
});

const mapDispatchToProps = (dispatch) => ({
  getBanner: (url) => dispatch(actions.getStationBanner(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
