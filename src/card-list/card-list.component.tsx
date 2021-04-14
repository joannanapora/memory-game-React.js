import React, { useState, useEffect } from "react";
import Card from "../card/card.component";
import "../card-list/card-list.scss";
import { ICard } from "../interfaces/card.interface";
import WinnerScreen from "../winner-screen/winner-screen.component";
import ResetModal from "../modal/modal-restart.component";
import ExitModal from "../modal/modal-exit.component";
import { shuffleCards } from "../functions/shuffle-cards.fn";
import { prepareSetOfCards } from "../functions/select-cards.fn";
import Timer from "../timer/timer.component";

import { useHistory, useLocation, withRouter } from "react-router";
import { parse } from "uuid";

const TIME_FOR_PEEK = 800;

const CardList = () => {
  const location: any = useLocation();
  const history: any = useHistory();

  const parsedCards = JSON.parse(location.state).cards;
  const parsedGrid = JSON.parse(location.state).grid;

  const [cards, setCards] = useState<ICard[]>(parsedCards);
  const [flippedCards, setflippedCards] = useState<ICard[]>([]);
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const [reset, setReset] = useState<boolean>(false);
  const [exit, setExit] = useState<boolean>(false);
  const [resetTimer, setResetTimer] = useState<boolean>(false);
  const [counter, setCounter] = useState<{ min: number; sec: number }>({
    min: 0,
    sec: 0,
  });
  const [moves, setMoves] = useState<number>(0);

  const openResetModal = () => {
    const listPrepareToReset = cards.map((el) => {
      if (el.isMatched) {
        return el;
      }
      setflippedCards([]);
      return { ...el, isFlipped: false };
    });
    setCards(listPrepareToReset);
    setReset(true);
  };

  const openExitModal = () => {
    setExit(true);
  };

  const closeResetModal = () => {
    setReset(false);
    setCards(shuffleCards(prepareSetOfCards(parsedCards.length / 2)));
    setResetTimer(false);
    setMoves(0);
  };

  const closeExitModal = () => {
    setExit(false);
  };

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
  }, [cards, flippedCards, isWinner, resetTimer]);

  const handleNoReset = () => {
    setReset(false);
  };
  const handleReset = async () => {
    closeResetModal();
  };
  const handleNoExit = () => {
    setExit(false);
  };
  const handleExit = () => {
    history.push("/");
  };

  const toggleClass = (id: string) => {
    setResetTimer(true);
    setReset(false);
    if (flippedCards.length < 2) {
      const listAfterClick = cards.map((element: any) => {
        if (id === element.id && element.id !== flippedCards[0]?.id) {
          setflippedCards([...flippedCards, element]);
          setMoves(moves + 1);
          return { ...element, isFlipped: true };
        }
        return element;
      });
      setCards(listAfterClick);
    }
  };

  return cards ? (
    isWinner ? (
      <div>
        <WinnerScreen
          minutes={counter.min}
          seconds={counter.sec}
          moves={moves}
        />
      </div>
    ) : (
      <div data-testid="memory-cards" className="memory-game-container">
        <div className="quit-reset-container">
          <div>
            {resetTimer ? (
              <Timer counter={counter} setCounter={setCounter} />
            ) : (
              "time: 0 m : 0 s"
            )}
          </div>
          <div>moves: {moves}</div>
          <button onClick={openResetModal} className="game-button">
            RESTART
          </button>
          <button onClick={openExitModal} className="game-button">
            EXIT
          </button>
        </div>
        <div className="cards">
          <div className={JSON.parse(location.state).grid}>
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
        <div className="authorOfIcons">
          Icons designed by Icongeek26 from Flaticon
        </div>
      </div>
    )
  ) : (
    <div>NO CARDS</div>
  );
};

export default withRouter(CardList);
