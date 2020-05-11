import * as React from "react";
import "./index.scss";
/**
 * 为了代码的整洁，请
 * 渲染列表时候，必须使用 key 
 */
export default class extends React.Component {
  state = {
    music: [
      {
        id: 11,
        name: "发现音乐",
        icon: require("../../assets/svg/music.svg"),
      },
      {
        id: 22,
        name: "私人FM",
        icon: require("../../assets/svg/diantai.svg"),
      },
      { id: 33, name: "视频", icon: require("../../assets/svg/vedio.svg") },
      {
        id: 44,
        name: "朋友",
        icon: require("../../assets/svg/friend.svg"),
      },
    ],
    personal: [
      {
        id: 55,
        name: "itunes音乐",
        icon: require("../../assets/svg/itunes.svg"),
      },
      {
        id: 66,
        name: "下载管理",
        icon: require("../../assets/svg/download.svg"),
      },
    ],
  };
  componentDidMount() {}
  render() {
    const { music, personal } = this.state;
    let renderMusic = (
      <>
        {music && music.map(item => (
            <div className="list" key={citem.id}>
                <div className="img-box">
                  <img src={citem.icon} />
                </div>
                <div>{citem.name}</div>
          </div> 
        ))}
      </>
    );
    let renderMe = (
      <>
        <div>我的音乐</div>
        {personal && personal.map(item => (
          <div className="list" key={item.id}>
           <div className="img-box">
             <img src={item.icon} />
           </div>
           <div>{item.name}</div>
         </div>
        ))}
      </>
    );

    // let _renderList = (
    //   <>
    //     {array &&
    //       array.map((item) => {
    //         if (item.title != null) {
    //           return (
    //             <div key={item.pid}>
    //               <div>{item.title}</div>
    //               <div>
    //                 {item.child.map((citem) => {
    //                   return (
    //                     <div className="list" key={citem.id}>
    //                       <div className="img-box">
    //                         <img src={citem.icon} />
    //                       </div>
    //                       <div>{citem.name}</div>
    //                     </div>
    //                   );
    //                 })}
    //               </div>
    //             </div>
    //           );
    //         } else {
    //           return (
    //             <div key={item.id}>
    //               {item.child.map((citem, index) => {
    //                 return (
    //                   <div className="list" key={citem.id}>
    //                     <div className="img-box">
    //                       <img src={citem.icon} />
    //                     </div>
    //                     <div>{citem.name}</div>
    //                   </div>
    //                 );
    //               })}
    //             </div>
    //           );
    //         }
    //       })}
    //   </>
    // );

    return <>
      {renderMusic}
      {renderMe}
    </>;
  }
}
