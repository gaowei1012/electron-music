import * as React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default class Header extends React.PureComponent {
  static defaultProps = {
    array: [
      {
        id: 0,
        title: "个性推荐",
      },
    ],
  };
  static propTypes = {
    array: PropTypes.array.isRequired,
  };
  handleItem = (id, title) => {
    console.log("id", id);
    console.log("title", title);
  };
  render() {
    const { array } = this.props;
    let renderList = (
      <div className="list-box">
        {array &&
          array.map((item) => (
            <div
              className="list"
              key={item.id}
              onClick={() => this.handleItem(item.id, item.title)}
            >
              <div className="name">{item.title}</div>
            </div>
          ))}
      </div>
    );

    return <>{renderList}</>;
  }
}
