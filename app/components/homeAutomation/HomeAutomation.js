import React from "react";
import {Route, Link} from "react-router-dom";
import Button from "../button/button";



const HomeAutomation = (props) => {

  return (
    <div className="home-auto home-auto--md home-auto--sm">
      {props.children}
    </div>
  );
};


export default HomeAutomation;
