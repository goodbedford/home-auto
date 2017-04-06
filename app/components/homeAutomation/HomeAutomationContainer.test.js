/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import HomeAutomationContainer from "./HomeAutomationContainer";

describe("<HomeAutomationContainer />", () => {
  it("HomeAutomationContainer snapshot", () => {
    const wrapper = shallow(<HomeAutomationContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should have isLoading prop", () => {
    const wrapper = shallow(<HomeAutomationContainer />);
    // console.log(wrapperl)
    expect(wrapper.state("isLoading")).toEqual(true);
  });
  it("should have homes prop", () => {
    const wrapper = shallow(<HomeAutomationContainer />);
    const homes = wrapper.state("homes");
    expect(homes).toBeDefined();
    expect(Array.isArray(homes)).toEqual(true);
  });
});
