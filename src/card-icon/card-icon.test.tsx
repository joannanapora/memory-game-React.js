import React from "react";
import { render, RenderResult } from "@testing-library/react";
import CardIcon from "../card-icon/card-icon.component";

const MOCK_ICON_NAME = "Icon7";
let wrapper: RenderResult;

beforeEach(() => {
  wrapper = render(<CardIcon iconName={MOCK_ICON_NAME} />);
});

describe("CardIcon Component", () => {
  test("renders CardIcon correctly", () => {
    wrapper.findByTestId("icon");
  });
});
