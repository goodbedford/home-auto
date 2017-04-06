import React from "react";
import {Redirect, Route,Link, NavLink} from "react-router-dom";
import Button from "../button/Button";

const PropTypes = React.PropTypes;
const propTypes = {
  isDeleted: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  handleGetRoomClick: PropTypes.func,
  handleDeleteRoom: PropTypes.func
};
const defaultProps = {
  isDeleted: false,
};

const PanelItem = (props) => {
  // console.log("props items", props);
  let nav = null;
  nav = props.items.map((item, index, items) => {
    if(props.match.params.roomId) {
      return (
        <div className="home-auto__panel-group" key={item._id}>
        <NavLink
          onClick={props.handleGetRoomClick(props.match.params.homeId, item._id)}
          exact
          to={{
            pathname:`/homes/${props.match.params.homeId}/rooms/${item._id}`
          }}
          activeClassName="home-auto__panel-item--active"
          className="home-auto__panel-item">
          <span>{item.name}</span>
        </NavLink>
        <NavLink
          onClick={props.handleGetRoomClick(props.match.params.homeId, item._id)}
          to={`/homes/${props.match.params.homeId}/rooms/${item._id}/edit`}
          activeClassName="home-auto__panel-item--active"
          className="home-auto__panel-item home-auto__panel-item--edit-btn">
          <span>
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </span>
        </NavLink>
        <span
          onClick={props.handleDeleteRoom}
          className="home-auto__panel-item home-auto__panel-item--edit-btn">
          <i className="fa fa-trash" aria-hidden="true"></i>
        </span>
      </div>
      );
    }
    else if(props.match.params.homeId) {
      return (
        <NavLink
          exact
          to={{
            pathname: `/homes/${props.match.params.homeId}/rooms/${item._id}`,
          }}
          key={item._id}
          activeClassName="home-auto__panel-item--active"
          className="home-auto__panel-item"><span>{item.name}</span>
        </NavLink>
      );
    }
    else {
      return (
        <NavLink
          exact
          to= {`/homes/${item._id}/rooms`}
          key={item._id}
          activeClassName="home-auto__panel-item--active"
          className="home-auto__panel-item"><span>{item.name}</span>
        </NavLink>
      );
    }
  });

  if(props.isDeleted) {
    return <Redirect to={`/homes/${props.match.params.homeId}/rooms`} />;
  }
  return (
    <div className="home-auto__section-rooms home-auto__section-rooms--bottom-border">
      {nav}
    </div>
  );
};

PanelItem.propTypes = propTypes;
PanelItem.defaultProps = defaultProps;

export default PanelItem;
