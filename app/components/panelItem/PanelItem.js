import React from "react";
import {Route, NavLink} from "react-router-dom";
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
  return (
    <div className="home-auto__section-rooms">
      {props.items.map((item, index, items) => {
        let stateItems = getRoomNav(items);
        if(props.match.params.roomId) {
          return (
            <NavLink
              onClick={props.handleGetRoomClick(props.match.params.homeId, item._id)}
              exact
              to={{
                pathname:`/homes/${props.match.params.homeId}/rooms/${item._id}`,
                state: {rooms: stateItems}
              }}
              key={item._id}
              className="home-auto__panel-item">{item.name}
            </NavLink>
          );
        }
        if(props.match.params.homeId) {
          return (
            <NavLink
              exact
              to={{
                pathname: `/homes/${props.match.params.homeId}/rooms/${item._id}`,
                state: {rooms: stateItems}
              }}
              key={item._id}
              className="home-auto__panel-item">{item.name}
            </NavLink>
          );
        }
        return (
          <NavLink
            exact
            to={{
              pathname: `/homes/${item._id}/rooms`,
            }}
            key={item._id}
            className="home-auto__panel-item">{item.name}
          </NavLink>
        );
      })}
    </div>
  );
};

PanelItem.propTypes = propTypes;

export default PanelItem;
