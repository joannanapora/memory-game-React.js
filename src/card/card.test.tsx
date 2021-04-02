import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import Card from "./card.component";

const MOCK_FLIPPED = false;
const TOGGLE_CLASS = jest.fn();
const MOCK_ID = 1;

let wrapper: RenderResult;

beforeEach(() => {
  wrapper = render(
    <Card
      cardID={MOCK_ID}
      toggleClass={TOGGLE_CLASS}
      isFlipped={MOCK_FLIPPED}
    />
  );
});

describe("Card Component", () => {
  test("renders Card header correctly", () => {
    wrapper.getByText("Memory Card");
  });
});
