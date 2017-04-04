import React from "react";
import {Route,Link, NavLink} from "react-router-dom";
import Button from "../button/button";

const PropTypes = React.PropTypes;
const propTypes = {
  items: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};
function getRoomNav(rooms) {
  return rooms.map(room => {
    return (
      {_id: room._id, name: room.name}
    );
  });
}
const PanelItem = (props) => {
  console.log("props items", props);
  let nav = null;
  nav = props.items.map((item, index, items) => {
    let stateItems = getRoomNav(items);
    if(props.match.params.roomId) {
      return (
        <div className="home-auto__panel-group">
        <NavLink
          onClick={props.handleGetRoomClick(props.match.params.homeId, item._id)}
          exact
          to={{
            pathname:`/homes/${props.match.params.homeId}/rooms/${item._id}`
          }}
          key={item._id}
          className="home-auto__panel-item">
          <span>{item.name}</span>
        </NavLink>
        <Link
          onClick={props.handleGetRoomClick(props.match.params.homeId, item._id)}
          to={`/homes/${props.match.params.homeId}/rooms/${item._id}/edit`}
          className="home-auto__panel-item home-auto__panel-item--edit-btn">
          <span key={item._id + 1}>edit</span>
        </Link>
      </div>
      );
    }
    if(props.match.params.homeId) {
      return (
        <NavLink
          exact
          to={{
            pathname: `/homes/${props.match.params.homeId}/rooms/${item._id}`,
          }}
          key={item._id}
          className="home-auto__panel-item"><span>{item.name}</span>
        </NavLink>
      );
    }
    return (
      <NavLink
        exact
        to= {`/homes/${item._id}/rooms`}
        key={item._id}
        className="home-auto__panel-item"><span>{item.name}</span>
      </NavLink>
    );
  });


  return (
    <div className="home-auto__section-rooms">
      {nav}
    </div>
  );
};

PanelItem.propTypes = propTypes;

export default PanelItem;
