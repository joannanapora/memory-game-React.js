import React from "react";
import {
  render,
  fireEvent,
  RenderResult,
  waitFor,
} from "@testing-library/react";
import CardList from "./card-list.component";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const MOCKED_GRID_CLASS = "grid-container4";
const MOCKED_CARDS_LIST = [
  {
    id: "u32asddagfs4324",
    isFlipped: false,
    icon: "Icon7",
    iconId: 4,
    isMatched: false,
  },
  {
    id: "u3243bvgfdsfds24",
    isFlipped: false,
    icon: "Icon6",
    iconId: 4,
    isMatched: false,
  },
  {
    id: "zz344gfdgfdgw324",
    isFlipped: false,
    icon: "Icon8",
    iconId: 5,
    isMatched: false,
  },
  {
    id: "zz3443wewedgdgf24",
    isFlipped: false,
    icon: "Icon12",
    iconId: 5,
    isMatched: false,
  },
];

describe("CardList Component", () => {
  let wrapper: RenderResult;

  const history = createMemoryHistory();

  const state = { cards: MOCKED_CARDS_LIST, grid: MOCKED_GRID_CLASS };
  history.location.state = JSON.stringify(state);
  const historyPushSpy = jest.spyOn(history, "push");

  beforeEach(() => {
    wrapper = render(
      <Router history={history}>
        <CardList />
      </Router>
    );
  });

  test("renders cards container", () => {
    wrapper.getByTestId("memory-cards");
  });

  test("grid gets correct initial className", () => {
    const { container } = wrapper;
    expect(container.getElementsByClassName(MOCKED_GRID_CLASS).length).toBe(1);
  });

  test("renders correct className of card variant onClick", () => {
    expect(
      wrapper.container.getElementsByClassName("card-inner").length
    ).toEqual(MOCKED_CARDS_LIST.length);

    const listOfCards = wrapper.getAllByTestId("Memory");
    fireEvent.click(listOfCards[0]);
    expect(
      wrapper.container.getElementsByClassName("card-inner-flipped").length
    ).toEqual(1);
    expect(
      wrapper.container.getElementsByClassName("card-inner").length
    ).toEqual(MOCKED_CARDS_LIST.length - 1);
  });

  test("only 2 cards in the same time can be flipped", () => {
    const listOfCards = wrapper.getAllByTestId("Memory");

    fireEvent.click(listOfCards[0]);
    fireEvent.click(listOfCards[1]);
    fireEvent.click(listOfCards[2]);

    expect(
      wrapper.container.getElementsByClassName("card-inner-flipped").length
    ).toEqual(2);
  });

  test("flipping and fast hidding the same card should not be possible", () => {
    const listOfCards = wrapper.getAllByTestId("Memory");

    expect(
      wrapper.container.getElementsByClassName("card-inner-flipped").length
    ).toEqual(0);

    fireEvent.click(listOfCards[0]);
    expect(
      wrapper.container.getElementsByClassName("card-inner-flipped").length
    ).toEqual(1);

    fireEvent.click(listOfCards[0]);
    expect(
      wrapper.container.getElementsByClassName("card-inner-flipped").length
    ).toEqual(1);
  });

  test("all cards should be hidden 0.3 sec after  ", async () => {
    const listOfCards = wrapper.getAllByTestId("Memory");
    expect(
      wrapper.container.getElementsByClassName("card-inner-flipped").length
    ).toEqual(0);
    fireEvent.click(listOfCards[0]);
    fireEvent.click(listOfCards[1]);
    expect(
      wrapper.container.getElementsByClassName("card-inner-flipped").length
    ).toEqual(2);
    await waitFor(() =>
      expect(
        wrapper.container.getElementsByClassName("card-inner-flipped").length
      ).toEqual(0)
    );
  });

  test("should display RESTART and EXIT buttons", () => {
    wrapper.getByText("RESTART");
    wrapper.getByText("EXIT");
  });

  test("EXIT should redirect to Menu", () => {
    const buttonExit = wrapper.getByText("EXIT");
    fireEvent.click(buttonExit);
    const buttonYes = wrapper.getByText("YES");
    fireEvent.click(buttonYes);
    expect(historyPushSpy).toHaveBeenCalled();
  });
});
