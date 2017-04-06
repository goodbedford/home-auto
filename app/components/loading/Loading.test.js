/* eslint-disable no-undef */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Loading from "./Loading";

describe("<Loading />", () => {
  it("Loading snapshot", () => {
    const wrapper = shallow(<Loading />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should have correct initial state", () => {
    const wrapper = shallow(<Loading />);

    const msg = wrapper.state("msg");
    const isMounted = wrapper.state("isMounted");

    expect(isMounted).toEqual(false);
    expect(msg).toBe("loading");
  });
  it("should have correct props", () => {
    const wrapper = shallow(<Loading />);

    const text = wrapper.props().children;
    const styles = wrapper.props().className;

    expect(text).toBe("loading");
    expect(styles).toBe("loading loading--block-md");
  });

});
