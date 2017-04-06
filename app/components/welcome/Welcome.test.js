/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Welcome from "./Welcome";

describe("<Welcome />", () => {
  const props =  {msg: "welcome"};
  it("Welcome snapshot", () => {
    const wrapper = shallow(<Welcome {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
