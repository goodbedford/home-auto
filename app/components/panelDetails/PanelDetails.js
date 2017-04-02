import React from "react";


const PanelDetails = (props) => {

  return (
    <div className="home-auto__panel-controls">
        {props.children}
    </div>
  );
};

export default PanelDetails;
