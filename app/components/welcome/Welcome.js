import React from "react";
import {Route, Link} from "react-router-dom";
import Button from "../button/Button";
const PropTypes = React.PropTypes;

const propTypes = {
  msg: PropTypes.string.isRequired
};
const defaultProps = {
  msg: "welcome"
};
const Welcome = (props) => {

  return (
    <div className="welcome">
      <h1 className="txt txt--header">Home Automation</h1>
      <h3 className="txt txt--sub-header">{props.msg}</h3>
      <div>
        <Link to="/homes">
          <Button txt="homes" />
        </Link>
      </div>
    </div>
  );
};
Welcome.propTypes = propTypes;
Welcome.defaultProps = defaultProps;

export default Welcome;
