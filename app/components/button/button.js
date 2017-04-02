import React from "react";
import {Route, Link} from "react-router-dom";

const PropTypes = React.PropTypes;
const propTypes = {
  txt: PropTypes.string.isRequired
};



const Button = (props) => {

  return (
    <button
      className="btn">{props.txt}</button>
  );
};


export default Button;
