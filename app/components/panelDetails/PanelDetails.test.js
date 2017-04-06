/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import PanelDetails from "./PanelDetails";

describe("<PanelDetails />", () => {

  it("PanelDetails snapshot", () => {
    const wrapper = shallow(<PanelDetails />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
