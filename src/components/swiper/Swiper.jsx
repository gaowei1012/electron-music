import * as React from "react";
import PropTypes from "prop-types";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
export default class swiper extends React.PureComponent {
  static defaultProps = {
    array: [
      {
        targetId: 2067419070,
        targetType: 60001,
        pic:
          "http://p1.music.126.net/ZDRpx3OMvUBG4VxjwSSJXQ==/109951165036580324.jpg",
        url: "orpheus://program/2067419070",
        typeTitle: "脱口秀",
        exclusive: false,
      },
      {
        targetId: 2067414469,
        targetType: 60001,
        pic:
          "http://p1.music.126.net/t4ZMuDzhR0M-jGuBoNPq1w==/109951165036567371.jpg",
        url: "orpheus://program/2067414469",
        typeTitle: "音乐故事",
        exclusive: false,
      },
      {
        targetId: 2067419107,
        targetType: 60001,
        pic:
          "http://p1.music.126.net/oKrZzi5-TTpkES9y0BM-1w==/109951165036583991.jpg",
        url: "orpheus://program/2067419107",
        typeTitle: "情感调频",
        exclusive: false,
      },
    ],
  };
  static propTypes = {
    array: PropTypes.array.isRequired,
  };
  render() {
    const { array } = this.props;
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
    let renderBanner = (
      <Swiper {...params}>
        {array &&
          array.map((item, index) => (
            <div key={index}>
              <img src={item.pic} alt={item.typeTitle} />
            </div>
          ))}
      </Swiper>
    );
    return <>{renderBanner}</>;
  }
}
