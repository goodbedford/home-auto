/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import PanelControls from "./PanelControls";

describe("<PanelControls />", () => {
  const props = {
    header: "rooms",
    match: {params: {homeId: 12}}
  };
  it("PanelControls snapshot", () => {
    const wrapper = shallow(
      <PanelControls
        {...props}
      />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
