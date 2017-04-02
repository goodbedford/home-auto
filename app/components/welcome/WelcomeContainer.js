import React from "react";
import {Route, Link, Redirect} from "react-router-dom";
import Welcome from "./Welcome";
import httpHelper from "../../utils/httpHelper.js";

const propTypes =  {
};
const defaultProps = {
  msg: "Premium Comfort"
};

class WelcomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount () {
  }

  render() {
    return (
      <Welcome
        msg={this.props.msg}
      />
    );
  }
}
WelcomeContainer.propTypes = propTypes;
WelcomeContainer.defaultProps = defaultProps;

export default WelcomeContainer;
