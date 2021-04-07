import React, { useState } from "react";
import "./memory-menu-styles.scss";
import { CardsData } from "../card-list/cards-data";
import { v4 as uuid } from "uuid";
import CardList from "../card-list/card-list.component";
import { ICard } from "../interfaces/card.interface";
import { shuffleCards } from "../shuffle-cards.fn";

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

const MemoryMenu = () => {
  const [gridClassName, setGridClassName] = useState<string>("grid-container4");
  const [shuffledCards, setShuffledCards] = useState<ICard[]>([]);
  const [gameMode, setGameMode] = useState<boolean>(false);

  const prepareSetOfCards = (cardPairs: number) => {
    let listOfCards: ICard[] = [];
    let i = cardPairs;
    let j = 0;
    let counter = 0;

    while (counter !== i) {
      j = Math.floor(Math.random() * CardsData.length);
      const objectToAdd = { ...CardsData[j], id: uuid() };

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
    setGameMode(true);
  };

  return gameMode ? (
    <CardList cardsAfterPick={shuffledCards} classOfGrid={gridClassName} />
  ) : (
    <div className="memory-menu-container">
      <h1 className="header">Memory Game</h1>
      <div className="size-button-container">
        <button
          className={
            shuffledCards.length === 24 || shuffledCards.length === 32
              ? "size-button-disabled"
              : "size-button"
          }
          onClick={() => onSizeChange(Sizes.SMALL)}
        >
          4x4
        </button>
        <button
          className={
            shuffledCards.length === 16 || shuffledCards.length === 32
              ? "size-button-disabled"
              : "size-button"
          }
          onClick={() => onSizeChange(Sizes.MEDIUM)}
        >
          6x4
        </button>
        <button
          className={
            shuffledCards.length === 24 || shuffledCards.length === 16
              ? "size-button-disabled"
              : "size-button"
          }
          onClick={() => onSizeChange(Sizes.LARGE)}
        >
          8x4
        </button>
      </div>
      <div className="size-button-headers">
        <h3>EASY - 16 CARDS</h3>
        <h3>MEDIUM - 24 CARDS</h3>
        <h3>HARD - 32 CARDS</h3>
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

export default MemoryMenu;
