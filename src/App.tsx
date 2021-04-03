import React, { Dispatch, SetStateAction, useState } from "react";
import CardList from "./card-list/card-list.component";
import { CardsData } from "./card-list/cards-data";

import "./App.scss";

export interface ICard {
  id: number;
  isFlipped: boolean;
  icon: any;
}

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

  const shufflePreparedCards = (Z: number, A: ICard[]) => {
    var i = A.length,
      j = 0,
      temp;
    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = A[i];
      A[i] = A[j];
      A[j] = temp;
      setShuffledCards(A);
      console.log(A);
      return A;
    }
  };

  const shuffle = (Z: number) => {
    let i = CardsData.length;
    let j = 0;
    let temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = CardsData[i];
      CardsData[i] = CardsData[j];
      CardsData[j] = temp;
    }

    let arrayList = CardsData.slice(1, Z + 1);
    console.log(arrayList);
    let doubleArray = arrayList.concat(arrayList);
    shufflePreparedCards(Z, doubleArray);
    return;
  };

  const onSizeChange = (id: string) => {
    if (id === Sizes.SMALL) {
      setGridClassName(GridClasses.SMALL);
      shuffle(8);
    }
    if (id === Sizes.MEDIUM) {
      setGridClassName(GridClasses.MEDIUM);
      shuffle(12);
    }
    if (id === Sizes.LARGE) {
      setGridClassName(GridClasses.LARGE);
      shuffle(16);
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
