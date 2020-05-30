import * as React from "react";
import PropTypes from "prop-types";
import "./index.scss";
export default class List extends React.PureComponent {
  static defaultProps = {
    list: [
      {
        id: 1,
        picUrl:
          "https://cn.bing.com/images/search?view=detailV2&ccid=ar%2fnpNqB&id=823C553D08960B76DD5334BA082D1F48A7E80D20&thid=OIP.ar_npNqBdwA8z40IqCMG5QAAAA&mediaurl=http%3a%2f%2fi0.kym-cdn.com%2fphotos%2fimages%2foriginal%2f000%2f000%2f860%2f1236997263747.png&exph=598&expw=446&q=img&simid=607988895766085799&selectedIndex=1&ajaxhist=0",
        name: "sss",
      },
      {
        id: 2,
        picUrl:
          "https://cn.bing.com/images/search?view=detailV2&ccid=ar%2fnpNqB&id=823C553D08960B76DD5334BA082D1F48A7E80D20&thid=OIP.ar_npNqBdwA8z40IqCMG5QAAAA&mediaurl=http%3a%2f%2fi0.kym-cdn.com%2fphotos%2fimages%2foriginal%2f000%2f000%2f860%2f1236997263747.png&exph=598&expw=446&q=img&simid=607988895766085799&selectedIndex=1&ajaxhist=0",
        name: "sss",
      },
    ],
    title: "",
  };

  static propTypes = {
    list: PropTypes.array.isRequired,
    title: PropTypes.string,
  };
  // state = {
  //   isShow: false,
  // };
  render() {
    // const { isShow } = this.state;
    const { list, title } = this.props;
    let _renderList = (
      <div className="listBox">
        <div>{title ? <div className="list-title">{title}</div> : null}</div>
        <div className="lists">
          {list &&
            list.map((item) => {
              return (
                <div key={item.id} className="box">
                  <div>
                    <img src={item.picUrl} alt="" />
                  </div>
                  <div>{item.name}</div>
                </div>
              );
            })}
        </div>
      </div>
    );

    return <>{_renderList}</>;
  }
}
