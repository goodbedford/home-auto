import React from "react";
import {Route, Redirect} from "react-router-dom";

const PropTypes = React.PropTypes;
const propTypes = {
  formMsg: PropTypes.string.isRequired,
  goToId: PropTypes.string.isRequired,
  homeId: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
const defaultProps = {
  isLoading: false,
  isSubmitted: false,
  name: "Unnamed Room",
  formMsg: "form"
};
const NewRoom = (props) => {
  if (props.isLoading) {
    return (
      <HomeAutomation>
        <HeaderContainer />
        <Loading />
      </HomeAutomation>
    );
  }
  if(props.isSubmitted && props.goToId) {
    return <Redirect to={`/homes/${props.homeId}/rooms/${props.goToId}`} />;
  }
  return (
    <form
      name="newRoomForm"
      className="form"
      onSubmit={props.handleSubmit}
    >
      <div className="form__header">{props.formMsg}</div>
      <div className="form__section form__section--main">
        <div className="form_group">
          <label className="form__label">
            <input
              type="text"
              name="name"
              className="form__input"
              minLength="2"
              maxLength="20"
              placeholder="Ex. Dinning Room"
              required
              onChange={props.handleChange}
              value={props.nameInput}
            />
          </label>
        </div>
      </div>
      <div className="controls controls--submit">
        <div className="controls__group">
          <input type="submit" className="btn btn--submit" value="Submit" />
        </div>
      </div>
    </form>
  );
};

NewRoom.propTypes = propTypes;
NewRoom.defaultProps = defaultProps;

export default NewRoom;
