import React, { useState } from "react";
import "./memory-menu-styles.scss";
import { ICard } from "../interfaces/card.interface";
import { shuffleCards } from "../functions/shuffle-cards.fn";
import { prepareSetOfCards } from "../functions/select-cards.fn";
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

  const onSizeChange = (id: string) => {
    if (id === Sizes.SMALL) {
      setGridClassName(GridClasses.SMALL);
      setShuffledCards(shuffleCards(prepareSetOfCards(8)));
    }
    if (id === Sizes.MEDIUM) {
      setGridClassName(GridClasses.MEDIUM);
      setShuffledCards(shuffleCards(prepareSetOfCards(12)));
    }
    if (id === Sizes.LARGE) {
      setGridClassName(GridClasses.LARGE);
      setShuffledCards(shuffleCards(prepareSetOfCards(16)));
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
