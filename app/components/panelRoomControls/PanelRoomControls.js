import React from "react";

const PropTypes = React.PropTypes;
const propTypes = {
  curtains: PropTypes.bool.isRequired,
  lights: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  thermostat: PropTypes.number.isRequired,
  handleTempIncrease: PropTypes.func.isRequired,
  handleTempDecrease: PropTypes.func.isRequired,
  toggleDevice: PropTypes.func.isRequired,
};
const defaultProps = {
  thermostat: 0
};

const PanelRoomControls = (props) => {

  return (
    <div className="room" data-room-name={props.name}>
      <div className="room__section">
        <div className="room__header">{props.name}</div>
        {/* thermostat */}
        <div className="temp temp--center">
          <div className="temp__section-flex temp__section-flex--temp-control">
            <div className="temp__section temp__section--bg-black">
              <span className="temp__text">
                {props.thermostat}
              </span>
            </div>
            <div className="btn__group btn__group--column">
              <button
                className="btn btn--temp-control"
                onClick={props.handleTempIncrease}>
                <span className="btn__icon btn__icon--plus">+</span>
              </button>
              <button
                className="btn btn--temp-control"
                onClick={props.handleTempDecrease}>
                <span className="btn__icon btn__icon--minus">-</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="room__controls">
        <div className="btn__section">
          <div className="btn__group-title">curtains</div>
          <div className="btn__group">
            <button
              className={props.curtains ? "btn btn--toggle btn--active" : "btn btn--toggle"}
              onClick={props.toggleDevice("curtains")}>
              open
            </button>
            <button
              className={!props.curtains ? "btn btn--toggle btn--active" :"btn btn--toggle"}
              onClick={props.toggleDevice("curtains")}>
              closed
            </button>
          </div>
        </div>
        <div className="btn__section">
          <div className="btn__group-title">lights</div>
          <div className="btn__group">
            <button
              className={props.lights ? "btn btn--toggle btn--active" : "btn btn--toggle"}
              onClick={props.toggleDevice("lights")}>
              open
            </button>
            <button
              className={!props.lights ? "btn btn--toggle btn--active" :"btn btn--toggle"}
              onClick={props.toggleDevice("lights")}>
              closed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
PanelRoomControls.propTypes = propTypes;
PanelRoomControls.defaultProps = defaultProps;


export default PanelRoomControls;
