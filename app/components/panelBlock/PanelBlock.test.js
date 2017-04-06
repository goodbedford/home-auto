/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import PanelBlock from "./PanelBlock";

describe("<PanelBlock />", () => {
  const props = {msg: "hello"};

  it("PanelBlock snapshot", () => {
    const wrapper = shallow(<PanelBlock {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
