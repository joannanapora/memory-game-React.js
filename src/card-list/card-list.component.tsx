import React, { useState, useEffect, useCallback } from "react";
import Card from "../card/card.component";
import "../card-list/card-list.scss";
import { ICard } from "../interfaces/card.interface";
import { useHistory } from "react-router-dom";

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

  let history = useHistory();

  const RedirectToWinnerPage = useCallback(() => {
    history.push("/winner");
  }, [history]);

  useEffect(() => {
    const checkIfWin = cards.find((card: ICard) => !card.isMatched);
    if (!checkIfWin) {
      RedirectToWinnerPage();
    }

    if (flippedCards.length === 2) {
      const isMatched = flippedCards[0].iconId === flippedCards[1].iconId;
      const listAfterMatch = cards.map((card: ICard) => {
        if (card.id === flippedCards[0].id || card.id === flippedCards[1].id) {
          return isMatched
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
  }, [cards, flippedCards, RedirectToWinnerPage]);

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

  return (
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
  );
};

export default CardList;
