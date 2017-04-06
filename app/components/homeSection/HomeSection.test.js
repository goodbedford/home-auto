/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import HomeSection from "./HomeSection";

describe("<HomeSection />", () => {
  it("HomeSection snapshot", () => {
    const wrapper = shallow(<HomeSection />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
