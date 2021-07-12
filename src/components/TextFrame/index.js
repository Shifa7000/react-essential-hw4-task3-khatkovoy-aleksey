import React from "react";
import { connect } from "react-redux";
import { actionSwitchVisibility } from "../../redux-store/actions";
import TextBlock from "../TextBlock";
import "./index.css";

class TextFrame extends React.Component {
  showHideHandle(e) {
    this.props.dispatch(actionSwitchVisibility);
  }
  render() {
    return (
      <div className="TextFrame">
        <button onClick={(e) => this.showHideHandle(e)}>Show/Hide</button>
        {this.props.visible && (
          <TextBlock>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe itaque recusandae autem inventore est aliquam dolore, illo perspiciatis nisi
            corporis, deleniti odio eius incidunt nostrum officiis sunt libero unde! Sapiente.
          </TextBlock>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visible: state,
  };
};

export default connect(mapStateToProps)(TextFrame);
