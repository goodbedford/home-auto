import React from "react";
const PropTypes = React.PropTypes;

const propTypes = {
  txt: PropTypes.string.isRequired
};
const defaultProps = {
  txt: "click"
};


const Button = (props) => {

  return (
    <button className="btn">{props.txt}</button>
  );
};
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
