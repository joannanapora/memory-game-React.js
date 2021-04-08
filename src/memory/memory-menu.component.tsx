import React, { useState } from "react";
import "./memory-menu-styles.scss";
import { getCardsData } from "../card-list/cards-data";
import { v4 as uuid } from "uuid";
import { ICard } from "../interfaces/card.interface";
import { shuffleCards } from "../shuffle-cards.fn";
import { withRouter } from "react-router-dom";
enum Sizes {
  SMALL = "4",
  MEDIUM = "6",
  LARGE = "8",
}

enum GridClasses {
  SMALL = "grid-container4",
  MEDIUM = "grid-container6",
  LARGE = "grid-container8",
}

const MemoryMenu = ({ history }: any) => {
  const [gridClassName, setGridClassName] = useState<string>("grid-container4");
  const [shuffledCards, setShuffledCards] = useState<ICard[]>([]);

  const prepareSetOfCards = (cardPairs: number) => {
    let listOfCards: ICard[] = [];
    let i = cardPairs;
    let j = 0;
    let counter = 0;

    while (counter !== i) {
      j = Math.floor(Math.random() * getCardsData().length);
      const objectToAdd = { ...getCardsData()[j], id: uuid() };

      const isInObject = listOfCards.find(
        (element) => element.iconId === objectToAdd.iconId
      );

      if (!isInObject) {
        listOfCards.push(objectToAdd);
        listOfCards.push({ ...objectToAdd, id: uuid() });
        counter++;
      }
    }

    setShuffledCards(shuffleCards(listOfCards));
  };

  const onSizeChange = (id: string) => {
    if (id === Sizes.SMALL) {
      setGridClassName(GridClasses.SMALL);
      prepareSetOfCards(8);
    }
    if (id === Sizes.MEDIUM) {
      setGridClassName(GridClasses.MEDIUM);
      prepareSetOfCards(12);
    }
    if (id === Sizes.LARGE) {
      setGridClassName(GridClasses.LARGE);
      prepareSetOfCards(16);
    }
  };

  const startGame = () => {
    const state = {
      cards: shuffledCards,
      grid: gridClassName,
    };
    history.push("/game", JSON.stringify(state));
  };

  return (
    <div className="memory-menu-container">
      <div className="main-header">Memory Game</div>
      <div className="size-button-container">
        <button
          className={
            shuffledCards.length === 24 || shuffledCards.length === 32
              ? "size-button-disabled"
              : "size-button"
          }
          onClick={() => onSizeChange(Sizes.SMALL)}
        >
          EASY - 16
        </button>
        <button
          className={
            shuffledCards.length === 16 || shuffledCards.length === 32
              ? "size-button-disabled"
              : "size-button"
          }
          onClick={() => onSizeChange(Sizes.MEDIUM)}
        >
          MEDIUM - 24
        </button>
        <button
          className={
            shuffledCards.length === 24 || shuffledCards.length === 16
              ? "size-button-disabled"
              : "size-button"
          }
          onClick={() => onSizeChange(Sizes.LARGE)}
        >
          HARD - 32
        </button>
      </div>
      <div className="start-button-container">
        <button
          disabled={shuffledCards.length === 0}
          onClick={startGame}
          className="start-button"
        >
          START
        </button>
      </div>
    </div>
  );
};

export default withRouter(MemoryMenu);
