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
// import MainRoute from "../components/MainRoute";
// import Home from "../components/Home";
// import NewsRoute from "../components/NewsRoute";
// import Nav from "../components/Nav";
// import PromptContainer from "../containers/PromptContainer";
// import ConfirmBattleContainer from "../containers/ConfirmBattleContainer";
// import ResultsContainer from "../containers/ResultsContainer";
const Routes =  (
  <Router basename="/home-auto/">
    <div>
      {/* <Nav /> */}
        <Route exact path="/" component={WelcomeContainer} />
        <Route exact path="/homes" component={HomeAutomationContainer} />
        <Route exact path="/homes/:homeId/rooms" component={HomeDetails} />
        <Switch>
        <Route exact path="/homes/:homeId/rooms/:roomId/edit" component={RoomDetails} />
        <Route exact path="/homes/:homeId/rooms/new" component={HomeDetails} />
        <Route exact path="/homes/:homeId/rooms/:roomId" component={RoomDetails} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
