import React from "react";
import {Route, Link} from "react-router-dom";
import Button from "../button/button";



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


export default Welcome;
