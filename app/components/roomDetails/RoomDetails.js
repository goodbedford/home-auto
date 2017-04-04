import React from "react";
import {Route, Link, NavLink, Redirect, Switch} from "react-router-dom";
import HomeAutomation from "../homeAutomation/HomeAutomation";
import HeaderContainer from "../header/HeaderContainer";
import HomeSection from "../homeSection/HomeSection";
import PanelItem from "../panelItem/PanelItem.js";
import PanelNav from "../panelNav/PanelNav.js";
import PanelDetails from "../panelDetails/PanelDetails.js";
import PanelControls from "../panelControls/PanelControls.js";
import PanelRoomControls from "../panelRoomControls/PanelRoomControls.js";
import PanelBlock from "../panelBlock/PanelBlock.js";
import Loading from "../loading/Loading.js";
import httpHelper from "../../utils/httpHelper.js";

const propTypes =  {
};
const defaultProps = {
};

class RoomDetails extends React.Component {
  constructor(props) {
    super(props);
    // const rooms = this.props.location.state.rooms;
    this.state = {
      isLoading: true,
      rooms: [],
      room: {}
    };
    this.handleGetRoomClick = this.handleGetRoomClick.bind(this);
    this.handleTempIncrease = this.handleTempIncrease.bind(this);
    this.handleTempDecrease = this.handleTempDecrease.bind(this);
    this.toggleDevice = this.toggleDevice.bind(this);
  }
  componentDidMount () {
    console.log("componentDidMount", new Date());

    let homeId = this.props.match.params.homeId;
    let roomId = this.props.match.params.roomId;
    httpHelper.getRooms(homeId)
      .then(rooms => {
        this.setState({
          isLoading: false,
          rooms: rooms
        });
      })
      .catch(error => {
        console.warn("Error with getHomes", error);
      });
    httpHelper.getRoom(homeId, roomId)
      .then(room => {
        console.log("room", JSON.stringify(room, null, 2));
        this.setState({
          isLoading: false,
          room: room
        });
      })
      .catch(error => {
        console.warn("Error with getRoom", error);
      });
  }
  shouldComponentUpdate () {
    console.log("shouldComponentUpdate",this.props.match.params.roomId, new Date());
    return true;
  }
  componentDidUpdate () {
    console.log("componentDidUpdate", new Date());
  }
  componentWillReceiveProps () {
    console.log("componentWillReceiveProps", new Date());
  }
  handleGetRoomClick (homeIdParam, roomIdParam) {
    console.log("handleGetRoomClick", new Date());
    return () => {
      let homeId = homeIdParam;
      let roomId = roomIdParam;
      httpHelper.getRoom(homeId, roomId)
        .then(room => {
          // console.log("room", JSON.stringify(room, null, 2));
          this.setState({
            isLoading: false,
            room: room
          });
        })
        .catch(error => {
          console.warn("Error with getRoom", error);
        });
    };
  }
  handleTempIncrease () {
    let num = this.state.room.thermostat;
    const room = this.state.room;
    const homeId = this.props.match.params.homeId;
    const roomId = this.props.match.params.roomId;

    num += num === 130 ? 0 : 1;
    room.thermostat = num;
    this.setState((prevState, props) => {
      prevState.room.thermostat = num;
      return {room: prevState.room};
    });
    httpHelper.updateRoom(homeId, roomId, room)
      .then(updatedRoom => {
        return updatedRoom.data;
      })
      .catch(error => {
        console.log("Error with updateRoom", error);
      });
  }
  handleTempDecrease () {
    let num = this.state.room.thermostat;
    const room = this.state.room;
    const homeId = this.props.match.params.homeId;
    const roomId = this.props.match.params.roomId;

    num -= num === 0 ? 0 : 1;
    room.thermostat = num;
    this.setState((prevState, props) => {
      prevState.room.thermostat = num;
      return {room: prevState.room};
    });
    httpHelper.updateRoom(homeId, roomId, room)
      .then(updatedRoom => {
        return updatedRoom.data;
      })
      .catch(error => {
        console.log("Error with updateRoom", error);
      });
  }
  toggleDevice (type) {
    const room = this.state.room;
    const isActive = ! this.state.room[type];
    const homeId = this.props.match.params.homeId;
    const roomId = this.props.match.params.roomId;
    room[type] = isActive;

    return () => {
      this.setState((prevState, props) => {
        prevState.room[type] = ! prevState.room[type];
        return {room: prevState.room};
      });
      httpHelper.updateRoom(homeId, roomId, room)
        .then(updatedRoom => {
          return updatedRoom.data;
        })
        .catch(error => {
          console.log("Error with updateRoom", error);
        });
    };
  }

  handleNewRoomClick () {

  }

  render() {
    if (this.state.isLoading) {
      return (
        <HomeAutomation>
          <HeaderContainer />
          <Loading />
        </HomeAutomation>
      );
    }

    return (
      <HomeAutomation>
        <HeaderContainer />
        <HomeSection>
          <PanelNav>
            <PanelControls header="Rooms" match={this.props.match} />
            <PanelItem items={this.state.rooms} match={this.props.match} handleGetRoomClick={this.handleGetRoomClick} />;
          </PanelNav>
          <PanelDetails>
            <PanelRoomControls
            curtains={this.state.room.curtains}
            lights={this.state.room.lights}
            name={this.state.room.name}
            thermostat={this.state.room.thermostat}
            handleTempIncrease={this.handleTempIncrease}
            handleTempDecrease={this.handleTempDecrease}
            toggleDevice={this.toggleDevice}
           />
          </PanelDetails>
        </HomeSection>
      </HomeAutomation>
    );
  }
}
RoomDetails.propTypes = propTypes;
RoomDetails.defaultProps = defaultProps;

export default RoomDetails;
