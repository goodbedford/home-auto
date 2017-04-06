/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import PanelRoomControls from "./PanelRoomControls";

//needs to test functions
describe("<PanelRoomControls />", () => {
  const props = {
    curtains: true,
    lights: true,
    name: "study room",
    thermostat: 65,
    handleTempIncrease: jest.fn(),
    handleTempDecrease: jest.fn(),
    toggleDevice: jest.fn()
  };

  it("PanelRoomControls snapshot", () => {
    const wrapper = shallow(
      <PanelRoomControls {...props}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
