/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import PanelNav from "./PanelNav";

describe("<PanelNav />", () => {

  it("PanelNav snapshot", () => {
    const wrapper = shallow(<PanelNav />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
