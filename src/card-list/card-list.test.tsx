import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  getByText,
  getByTestId,
  RenderResult,
} from "@testing-library/react";
import CardList from "./card-list.component";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

let wrapper: RenderResult;
beforeEach(() => {
  wrapper = render(
    <Router history={history}>
      <CardList />
    </Router>
  );
});

describe("CardList Component", () => {
  test("renders cards container", () => {
    wrapper.getByTestId("memory-cards");
  });

  // test("grid gets correct initial className", () => {
  //   const { container } = wrapper;
  //   expect(container.getElementsByClassName(MOCKED_GRID_CLASS).length).toBe(1);
  // });

  // test("renders correct className of card variant onClick", () => {
  //   expect(
  //     wrapper.container.getElementsByClassName("card-inner").length
  //   ).toEqual(MOCKED_CARDS_LIST.length);

  //   const listOfCards = wrapper.getAllByTestId("Memory");
  //   fireEvent.click(listOfCards[0]);
  //   expect(
  //     wrapper.container.getElementsByClassName("card-inner-flipped").length
  //   ).toEqual(1);
  //   expect(
  //     wrapper.container.getElementsByClassName("card-inner").length
  //   ).toEqual(MOCKED_CARDS_LIST.length - 1);
  // });

  // test("only 2 cards in the same time can be flipped", () => {
  //   const listOfCards = wrapper.getAllByTestId("Memory");

  //   fireEvent.click(listOfCards[0]);
  //   fireEvent.click(listOfCards[1]);
  //   fireEvent.click(listOfCards[2]);

  //   expect(
  //     wrapper.container.getElementsByClassName("card-inner-flipped").length
  //   ).toEqual(2);
  // });

  // test("flipping and fast hidding the same card should not be possible", () => {
  //   const listOfCards = wrapper.getAllByTestId("Memory");

  //   expect(
  //     wrapper.container.getElementsByClassName("card-inner-flipped").length
  //   ).toEqual(0);

  //   fireEvent.click(listOfCards[0]);
  //   expect(
  //     wrapper.container.getElementsByClassName("card-inner-flipped").length
  //   ).toEqual(1);

  //   fireEvent.click(listOfCards[0]);
  //   expect(
  //     wrapper.container.getElementsByClassName("card-inner-flipped").length
  //   ).toEqual(1);
  // });

  // test("all cards should be hidden 0.3 sec after  ", async () => {
  //   const listOfCards = wrapper.getAllByTestId("Memory");
  //   expect(
  //     wrapper.container.getElementsByClassName("card-inner-flipped").length
  //   ).toEqual(0);
  //   fireEvent.click(listOfCards[0]);
  //   fireEvent.click(listOfCards[1]);
  //   expect(
  //     wrapper.container.getElementsByClassName("card-inner-flipped").length
  //   ).toEqual(2);
  //   await waitFor(() =>
  //     expect(
  //       wrapper.container.getElementsByClassName("card-inner-flipped").length
  //     ).toEqual(0)
  //   );
  // });

  // test("should display RESTART and EXIT buttons", () => {
  //   wrapper.getByText("RESTART");
  //   wrapper.getByText("EXIT");
  // });
});
