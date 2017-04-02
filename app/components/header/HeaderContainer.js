import React from "react";
import {Route, Link, Redirect} from "react-router-dom";
import Header from "./Header";
import httpHelper from "../../utils/httpHelper.js";

const propTypes =  {
};
const defaultProps = {
};

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toDateString()
    };
  }
  componentDidMount () {

  }

  render() {
    return (
      <Header
        date={this.state.date}
      />
    );
  }
}
HeaderContainer.propTypes = propTypes;
HeaderContainer.defaultProps = defaultProps;

export default HeaderContainer;
