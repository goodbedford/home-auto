/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import RoomForm from "./RoomForm";

//needs to test functions
describe("<RoomForm />", () => {
  // const props = {match
  const props = {
    formMsg: "add room",
    goToId: "456",
    homeId: "12",
    isLoading: false,
    isSubmitted: false,
    handleChange: jest.fn(),
    handleSubmit: jest.fn()
  };
  it("RoomForm snapshot", () => {
    const wrapper = shallow(<RoomForm {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
