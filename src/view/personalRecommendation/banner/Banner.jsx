import React from "react";
import { connect } from "react-redux";
import actions from "../../../redux/actions";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./index.scss";

class Banner extends React.PureComponent {
  componentDidMount() {
    const url = "banner?type=1";
    const { getBanner } = this.props;
    getBanner(url);
  }

  render() {
    const banner = this.props.banner.item;

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
      //   navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev",
      //   },
      pagination: {
        el: ".swiper-pagination",
      },
    };

    if (!banner) {
      return (
        <div>
          <span className="color-fff">加载中</span>
        </div>
      );
    }
    let _renderArray = (
      <Swiper {...params}>
        {banner &&
          banner.map((item, index) => (
            <div key={index} className="img-box">
              <img src={item.pic} alt={item.typeTitle} />
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
  getBanner: (url) => dispatch(actions.getBanner(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
