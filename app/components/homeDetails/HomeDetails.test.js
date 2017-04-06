/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import HomeDetails from "./HomeDetails";

describe("<HomeDetails />", () => {
  it("HomeDetails snapshot", () => {
    const wrapper = shallow(<HomeDetails />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should have correct initial state", () => {
    const wrapper = shallow(<HomeDetails />);
    const isLoading = wrapper.state("isLoading");
    const isSubmitted = wrapper.state("isSubmitted");
    const rooms = wrapper.state("rooms");
    const goToId = wrapper.state("goToId");
    const nameInput = wrapper.state("nameInput");

    expect(isLoading).toEqual(true);
    expect(isSubmitted).toEqual(false);
    expect(Array.isArray(rooms)).toEqual(true);
    expect(goToId).toBe("");
    expect(nameInput).toBe("");
  });

});
// need to test methods
// handleChange
// handleSubmit
