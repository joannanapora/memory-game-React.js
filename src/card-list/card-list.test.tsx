import React from "react";
import { render, RenderResult } from "@testing-library/react";
import CardList from "./card-list.component";
import Card from "../card/card.component";
import ReactDOM from "react-dom";

describe("CardList Component", () => {
  const MOCKED_CARD_AMOUNT = 16;
  const MOCKED_GRID_CLASS = "grid-container4";
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(
      <CardList
        numberOfCards={MOCKED_CARD_AMOUNT}
        classOfGrid={MOCKED_GRID_CLASS}
      />
    );
  });

  test("renders Card header correctly", () => {
    wrapper.getAllByText("Memory Card");
  });

  test("renders correct initial amount of cards", () => {
    wrapper.getAllByText("Memory Card");
    const numberOfRenderedCards = wrapper.getAllByText("Memory Card").length;
    expect(numberOfRenderedCards).toEqual(MOCKED_CARD_AMOUNT);
  });

  test("grid gets correct initial className", () => {
    const { container } = wrapper;
    expect(container.getElementsByClassName(MOCKED_GRID_CLASS).length).toBe(1);
  });
});
