/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import HomeAutomation from "./HomeAutomation";

describe("<HomeAutomation />", () => {
  it("HomeAutomation snapshot", () => {
    const wrapper = shallow(<HomeAutomation />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
