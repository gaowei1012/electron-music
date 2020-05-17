import * as React from "react";
import PropTypes from "prop-types";
import "./index.scss";
export default class List extends React.PureComponent {
  static defaultProps = {
    list: [
      {
        id: 1,
        name: "sss",
        artists: {
          name: "111",
          picUrl:
            "http://img2.imgtn.bdimg.com/it/u=3984473917,238095211&fm=214&gp=0.jpg",
        },
        album: {
          name: "222",
        },
      },
      {
        id: 2,
        name: "sss1",
        artists: {
          name: "112221",
          picUrl:
            "http://img2.imgtn.bdimg.com/it/u=3984473917,238095211&fm=214&gp=0.jpg",
        },
        album: {
          name: "333",
        },
      },
    ],
  };

  static propTypes = {
    list: PropTypes.array.isRequired,
  };

  renderSquare = () => {
    // const
    // return (
    //   <>
    //     {artists.map((citem, key) => {
    //       <div key={key}>
    //         <div>{citem.name}</div>
    //         <div>{citem.picUrl}</div>
    //       </div>;
    //     })}
    //   </>
    // );
  };

  render() {
    const { list } = this.props;

    let _renderList = (
      <>
        {list &&
          list.map((item, index) => {
            console.log("item:", item);
            console.log("item--name:", item.artists);

            return (
              <div key={item.id}>
                <div>{index + 1}</div>
                {/* {item.artists.map((fcitem, key) => renderSquare(fcitem, key))} */}
                {/* {this.renderSquare(item.artists)} */}
                <div>{item.album.name}</div>
                <div>{111}</div>
              </div>
            );
          })}
      </>
    );

    return <>{_renderList}</>;
  }
}
