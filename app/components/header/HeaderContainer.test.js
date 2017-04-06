/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";

import HeaderContainer from "./HeaderContainer";


describe("<HeaderContainer />", () => {

  it("HeaderContainer snapshot test", () => {
    const wrapper = shallow(<HeaderContainer />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should have a date prop", () => {
    const date = jest.fn( () => "01111979");
    const wrapper = shallow(<HeaderContainer />);
    wrapper.setState({date: "01111979"});
    expect(toJson(wrapper).props.date).toBe("01111979");
  });


});
