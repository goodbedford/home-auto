/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";

import Header from "./Header";
import renderer from "react-test-renderer";


describe("<Header />", () => {
  it("Header snapshot test", () => {
    const wrapper = shallow(<Header date="01111979" />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
  it("Header should have title and date", () => {
    const wrapper = shallow(<Header date="01111979" />);
    expect(wrapper.find("span").length).toBe(2);
  });
  it("Header should show date", () => {
    const wrapper = shallow(<Header date="01111979" />);
    expect (wrapper.find("header").childAt(1).text()).toBe("01111979");
  });
});
