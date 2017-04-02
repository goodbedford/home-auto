import React from "react";
import {Route, Link, NavLink, Redirect} from "react-router-dom";
import HomeAutomation from "./HomeAutomation";
import HeaderContainer from "../header/HeaderContainer";
import HomeSection from "../homeSection/HomeSection";
import PanelItem from "../panelItem/PanelItem.js";
import PanelNav from "../panelNav/PanelNav.js";
import PanelDetails from "../panelDetails/PanelDetails.js";
import PanelControls from "../panelControls/PanelControls.js";
import PanelBlock from "../panelBlock/PanelBlock.js";
import Loading from "../loading/Loading.js";

import httpHelper from "../../utils/httpHelper.js";

const propTypes =  {
};
const defaultProps = {
};

class HomeAutomationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      homes: []
    };
  }
  componentDidMount () {
    httpHelper.getHomes()
      .then(homes => {
        // console.log("homes", JSON.stringify(homes,null,2));
        this.setState({
          isLoading:false,
          homes: homes
        });
      })
      .catch(error => {
        console.warn("Error with getHomes", error);
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <HomeAutomation>
          <HeaderContainer />
          <HomeSection>
            <Loading />
          </HomeSection>
        </HomeAutomation>
      );
    }
    return (
      <HomeAutomation>
        <HeaderContainer />
        <HomeSection>
          <PanelNav>
            <PanelControls header="Homes" match={this.props.match}  />
            <PanelItem items={this.state.homes} match={this.props.match} />;
          </PanelNav>
          <PanelDetails>
            <Route exact path="/homes" component={() => {
              return (
                <PanelBlock msg="Select a Home" />
              );
            }}/>
          </PanelDetails>
        </HomeSection>
      </HomeAutomation>
    );
  }
}
HomeAutomationContainer.propTypes = propTypes;
HomeAutomationContainer.defaultProps = defaultProps;

export default HomeAutomationContainer;
