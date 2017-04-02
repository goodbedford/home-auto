import React from "react";

const PropTypes = React.PropTypes;
const propTypes = {
  msg: PropTypes.string
};
const PanelBlock = (props) => {
  return (
    <div className="home-auto__panel-block">
      <span className="txt txt-lg">{props.msg}</span>
      {props.children}
    </div>
  );
};
PanelBlock.propTypes = propTypes;

export default PanelBlock;
