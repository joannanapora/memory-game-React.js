import React, { useState, useEffect, useCallback } from "react";
import Card from "../card/card.component";
import "../card-list/card-list.scss";
import { ICard } from "../interfaces/card.interface";
import WinnerScreen from "../winner-screen/winner-screen.component";
import ResetModal from "../modal/modal-restart.component";
import ExitModal from "../modal/modal-exit.component";
import { shuffleCards } from "../shuffle-cards.fn";

const TIME_FOR_PEEK = 800;

const CardList = ({
  classOfGrid,
  cardsAfterPick,
}: {
  classOfGrid: string;
  cardsAfterPick: ICard[];
}) => {
  const [cards, setCards] = useState<ICard[]>(cardsAfterPick);
  const [flippedCards, setflippedCards] = useState<ICard[]>([]);
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const [reset, setReset] = useState<boolean>(false);
  const [exit, setExit] = useState<boolean>(false);

  function openResetModal() {
    setReset(true);
  }

  function openExitModal() {
    setExit(true);
  }

  function closeResetModal() {
    setReset(false);
  }

  function closeExitModal() {
    setExit(false);
  }

  useEffect(() => {
    const checkIfWin = cards.find((card: ICard) => !card.isMatched);
    if (!checkIfWin) {
      setIsWinner(true);
    }

    if (flippedCards.length === 2) {
      const areCardMatching = flippedCards[0].iconId === flippedCards[1].iconId;
      const listAfterMatch = cards.map((card: ICard) => {
        if (card.id === flippedCards[0].id || card.id === flippedCards[1].id) {
          return areCardMatching
            ? { ...card, isMatched: true }
            : { ...card, isFlipped: false };
        }
        return card;
      });

      const timer = setTimeout(() => {
        setCards(listAfterMatch);
        setflippedCards([]);
      }, TIME_FOR_PEEK);

      return () => clearTimeout(timer);
    }
  }, [cards, flippedCards, isWinner]);

  const handleNoReset = () => {
    setReset(false);
  };
  const handleReset = () => {
    setReset(false);
    setCards(shuffleCards(cardsAfterPick));
  };
  const handleNoExit = () => {
    setExit(false);
  };
  const handleExit = () => {
    window.location.reload();
  };

  const toggleClass = (id: string) => {
    if (flippedCards.length < 2) {
      const listAfterClick = cards.map((element: any) => {
        if (id === element.id && element.id !== flippedCards[0]?.id) {
          setflippedCards([...flippedCards, element]);
          return { ...element, isFlipped: true };
        }
        return element;
      });
      setCards(listAfterClick);
    }
  };

  return isWinner ? (
    <WinnerScreen />
  ) : (
    <div className="memory-game-container">
      <div className="quit-reset-container">
        <div className="timer">00:00:00s</div>
        <button onClick={openResetModal} className="game-button">
          RESTART
        </button>
        <button onClick={openExitModal} className="game-button">
          EXIT
        </button>
      </div>
      <div className="cards">
        <div className={classOfGrid}>
          {cards?.map((card: ICard, i) => {
            return (
              <Card
                isMatched={card.isMatched}
                icon={card.icon}
                isFlipped={card.isFlipped}
                toggleClass={toggleClass}
                key={i}
                cardID={card.id}
              />
            );
          })}
        </div>
        {reset && (
          <ResetModal
            handleNoReset={handleNoReset}
            handleReset={handleReset}
            modalIsOpen={reset}
            closeModal={closeResetModal}
          />
        )}
        {exit && (
          <ExitModal
            handleNoExit={handleNoExit}
            handleExit={handleExit}
            modalIsOpen={exit}
            closeModal={closeExitModal}
          />
        )}
      </div>
    </div>
  );
};

export default CardList;
