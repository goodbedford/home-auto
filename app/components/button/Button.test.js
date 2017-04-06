/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import Button from "./Button";
import renderer from "react-test-renderer";


describe("<Button />", () => {
  it("Button snapshot test", () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Button should correct default text", () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();
    expect(tree.children.length).toBe(1);
    expect(tree.children[0]).toBe("click");
  });
  it("Button should correct text when given props", () => {
    const component = renderer.create(<Button txt="enter" />);
    const tree = component.toJSON();
    expect(tree.children.length).toBe(1);
    expect(tree.children[0]).toBe("enter");
  });
});
