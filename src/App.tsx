import React, { Dispatch, SetStateAction, useState } from "react";
import CardList from "./card-list/card-list.component";

import "./App.scss";

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
  const [numberOfCards, setNumberOfCards] = useState<number>(16);

  const onSizeChange = (id: string) => {
    if (id === Sizes.SMALL) {
      setGridClassName(GridClasses.SMALL);
      setNumberOfCards(16);
    }
    if (id === Sizes.MEDIUM) {
      setGridClassName(GridClasses.MEDIUM);
      setNumberOfCards(24);
    }
    if (id === Sizes.LARGE) {
      setGridClassName(GridClasses.LARGE);
      setNumberOfCards(32);
    }
  };

  return (
    <div className="App">
      <div className="cards">
        <CardList numberOfCards={numberOfCards} classOfGrid={gridClassName} />
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
