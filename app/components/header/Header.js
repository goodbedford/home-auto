import React from "react";
import {Route, Link} from "react-router-dom";
import Button from "../button/button";

const PropTypes = React.PropTypes;
const propTypes = {
  date: PropTypes.string.isRequired
};

const Header = (props) => {
  return (
    <header className="home-auto__header">
      <span>Home Automation by Goodbedford LLC</span>
      <span>{props.date}</span>
    </header>
  );
};

Header.propTypes = propTypes;

export default Header;
