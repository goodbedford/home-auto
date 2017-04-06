/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import PanelItem from "./PanelItem";

describe("<PanelItem />", () => {
  const rooms = [
    {_id: 123, name: "one room", thermostat: 40, curtains: true, lights: true},
    {_id: 456,name: "2nd room", thermostat: 50, curtains: false, lights: false}
  ];
  const props = {
    isDeleted: false,
    items: rooms,
    match: {params:{}},
    handleGetRoomClick: jest.fn(),
    handleDeleteRoom: jest.fn()
  };
  it("PanelItem snapshot", () => {
    const wrapper = shallow(
      <PanelItem
        {...props}
      />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("PanelItem snapshot with params.homeId", () => {
    props.match = {params: {homeId: 12}};
    const wrapper = shallow(
      <PanelItem
        {...props}
      />);
      // console.log(wrapper.unrendered.props);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("PanelItem snapshot with params.roomId", () => {
    props.match = {params: {homeId: 12, roomId: 456}};
    const wrapper = shallow(
      <PanelItem
        {...props}
      />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
