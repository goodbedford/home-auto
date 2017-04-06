/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import RoomDetails from "./RoomDetails";

//needs to test functions

// handleGetRoomClick
// handleDeleteRoom
// handleTempIncrease
// handleTempDecrease
// toggleDevice
// handleChange
// handleSubmit
describe("<RoomDetails />", () => {
  // const props = {match:{}};
  it("RoomDetails snapshot", () => {
    const props = {match: {params:{}}};
    const wrapper = shallow(<RoomDetails {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should have correct default state", () => {
    const wrapper = shallow(<RoomDetails />);
    const isLoading = wrapper.state("isLoading");
    const isSubmitted = wrapper.state("isSubmitted");
    const goToId = wrapper.state("goToId");
    const rooms = wrapper.state("rooms");
    const room = wrapper.state("room");
    const nameInput = wrapper.state("nameInput");

    expect(isLoading).toBe(false);
    expect(isSubmitted).toBe(false);
    expect(goToId).toBe("");
    expect(Array.isArray(rooms)).toBe(true);
    expect(room).toEqual({});
    expect(nameInput).toBe("");
  });
});
