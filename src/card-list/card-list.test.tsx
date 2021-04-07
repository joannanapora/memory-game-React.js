import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CardList from "./card-list.component";
import { BrowserRouter } from "react-router-dom";

describe("CardList Component", () => {
  const MOCKED_GRID_CLASS = "grid-container4";
  const MOCKED_CARDS_LIST = [
    {
      id: "u32asddagfs4324",
      isFlipped: false,
      icon: <div />,
      iconId: 4,
      isMatched: false,
    },
    {
      id: "u3243bvgfdsfds24",
      isFlipped: false,
      icon: <div />,
      iconId: 4,
      isMatched: false,
    },
    {
      id: "zz344gfdgfdgw324",
      isFlipped: false,
      icon: <div />,
      iconId: 5,
      isMatched: false,
    },
    {
      id: "zz3443wewedgdgf24",
      isFlipped: false,
      icon: <div />,
      iconId: 5,
      isMatched: false,
    },
  ];

  let wrapper: any;

  beforeEach(() => {
    wrapper = render(
      <BrowserRouter>
        <CardList
          cardsAfterPick={MOCKED_CARDS_LIST}
          classOfGrid={MOCKED_GRID_CLASS}
        />
      </BrowserRouter>
    );
  });

  test("renders Card header correctly", () => {
    wrapper.getAllByTestId("Memory");
  });

  test("renders correct initial amount of cards", () => {
    wrapper.getAllByTestId("Memory");
    const numberOfRenderedCards = wrapper.getAllByTestId("Memory").length;
    expect(numberOfRenderedCards).toEqual(MOCKED_CARDS_LIST.length);
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
});
