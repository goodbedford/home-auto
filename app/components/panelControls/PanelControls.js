import React from "react";
import {NavLink} from "react-router-dom";

const PropTypes = React.PropTypes;
const propTypes = {
  header: PropTypes.string.isRequired
};

const PanelControls = (props) => {

  return (
    <div className="controls controls-flex controls-flex--center-start">
      <div className="controls__group controls__group--space-between controls__group--tall">
        <NavLink to={`/homes/${props.match.params.homeId}/rooms/new`}>
          <span className="controls__icon controls__icon--sm invisible">+</span>
        </NavLink>
        <span className="controls__text controls__text-btn">{props.header}</span>
        {/* room control btns */}
        {this.children}
        <div className="block-tall">
          <span className="block-controls"></span>
        </div>
      </div>
    </div>
  );
};
PanelControls.propTypes = propTypes;
export default PanelControls;
