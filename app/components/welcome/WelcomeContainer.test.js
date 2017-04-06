/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import WelcomeContainer from "./WelcomeContainer";

describe("<WelcomeContainer />", () => {
  const props =  {msg: "welcome"};
  it("WelcomeContainer snapshot", () => {
    const wrapper = shallow(<WelcomeContainer {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
