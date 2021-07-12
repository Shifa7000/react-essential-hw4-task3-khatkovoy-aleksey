import React from "react";
import "./index.css";

class TextBlock extends React.Component {
  render() {
    return <p className="TextBlock">{this.props.children}</p>;
  }
}

export default TextBlock;
