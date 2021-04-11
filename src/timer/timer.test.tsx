import React from "react";
import { render, RenderResult } from "@testing-library/react";
import Timer from "./timer.component";

let wrapper: RenderResult;

const MOCK_COUNTER = { min: 0, sec: 12 };
const MOCK_SETCOUNTER = jest.fn();

beforeEach(() => {
  wrapper = render(
    <Timer counter={MOCK_COUNTER} setCounter={MOCK_SETCOUNTER} />
  );
});

describe("Timer Component", () => {
  test("renders Timer correctly", () => {
    wrapper.getByText("m");
    wrapper.getByText("s");
  });
});
