import React, { ReactElement } from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import Card from "./card.component";
import CardIcon from "./card-icon.component";

const MOCK_FLIPPED = false;
const TOGGLE_CLASS = jest.fn();
const MOCK_ID = "3dsa34";
const MOCK_ICON = "Icon7";
const MOCK_ISMATCHED = false;
let wrapper: RenderResult;

beforeEach(() => {
  wrapper = render(
    <Card
      isMatched={MOCK_ISMATCHED}
      icon={MOCK_ICON}
      cardID={MOCK_ID}
      toggleClass={TOGGLE_CLASS}
      isFlipped={MOCK_FLIPPED}
    />
  );
});

describe("Card Component", () => {
  test("renders Card header correctly", () => {
    wrapper.getByTestId("Memory");
  });
});
