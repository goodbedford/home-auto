import React from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";

import WelcomeContainer from "../components/welcome/WelcomeContainer";
import HomeAutomationContainer from "../components/homeAutomation/HomeAutomationContainer";
import HomeDetails from "../components/homeDetails/HomeDetails";
import RoomDetails from "../components/roomDetails/RoomDetails";
import NewRoomContainer from "../components/newRoom/NewRoomContainer";
// import MainRoute from "../components/MainRoute";
// import Home from "../components/Home";
// import NewsRoute from "../components/NewsRoute";
// import Nav from "../components/Nav";
// import PromptContainer from "../containers/PromptContainer";
// import ConfirmBattleContainer from "../containers/ConfirmBattleContainer";
// import ResultsContainer from "../containers/ResultsContainer";
const Routes =  (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={WelcomeContainer} />
        <Route exact path="/homes" component={HomeAutomationContainer} />
        <Route exact path="/homes/:homeId/rooms" component={HomeDetails} />
        <Route exact path="/homes/:homeId/rooms/new" component={NewRoomContainer} />
        <Route exact path="/homes/:homeId/rooms/:roomId" component={RoomDetails} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
