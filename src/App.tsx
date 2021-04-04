import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import CardList from "./card-list/card-list.component";
import { CardsData } from "./card-list/cards-data";
import { v4 as uuid } from "uuid";
import "./App.scss";
import { ICard } from "./interfaces/card.interface";

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

const App = () => {
  const [gridClassName, setGridClassName] = useState<string>("grid-container4");
  const [shuffledCards, setShuffledCards] = useState<ICard[]>([]);

  const shufflePreparedCards = (cardsBeforeShuffling: ICard[]) => {
    let i = cardsBeforeShuffling.length;
    let j = 0;
    let temp;

    while (i--) {
      j = Math.floor(Math.random() * i + 1);
      temp = cardsBeforeShuffling[i];
      cardsBeforeShuffling[i] = cardsBeforeShuffling[j];
      cardsBeforeShuffling[j] = temp;
    }

    setShuffledCards(cardsBeforeShuffling);
  };

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
    shufflePreparedCards(listOfCards);
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

  return (
    <div className="App">
      <div className="cards">
        <CardList cardsAfterPick={shuffledCards} classOfGrid={gridClassName} />
      </div>
      <div className="menu">
        <button
          className="cardsize-button"
          onClick={() => onSizeChange(Sizes.SMALL)}
        >
          4x4
        </button>
        <button
          className="cardsize-button"
          onClick={() => onSizeChange(Sizes.MEDIUM)}
        >
          6x4
        </button>
        <button
          className="cardsize-button"
          onClick={() => onSizeChange(Sizes.LARGE)}
        >
          8x4
        </button>
      </div>
    </div>
  );
};

export default App;
