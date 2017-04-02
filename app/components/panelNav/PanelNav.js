import React from "react";


const PanelNav = (props) => {

  return (
    <div className="home-auto__panel-rooms home-auto__panel-rooms--column">
      <div className="home-auto__section-group">
        {props.children}
      </div>
    </div>
  );
};

export default PanelNav;
