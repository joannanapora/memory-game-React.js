import React, { useState, useEffect } from "react";
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
  const [flippedCardsCounter, setFlippedCardsCounter] = useState<number>(0);
  const [idOfFlippedCards, setidOfFlippedCards] = useState<number[]>([]);
  const [counterOfMatches, setCounterOfMatches] = useState<number>(0);

  let history = useHistory();

  const RedirectToWinnerPage = () => {
    history.push("/winner");
  };

  useEffect(() => {
    console.log(counterOfMatches);
    if (counterOfMatches === cards.length - 1) {
      RedirectToWinnerPage();
    }

    if (
      flippedCardsCounter === 2 &&
      idOfFlippedCards[0] !== idOfFlippedCards[1]
    ) {
      const listAfterFlip = cards.map((element: any) => {
        if (element.isMatched) {
          return { ...element, isFlipped: true };
        }
        return { ...element, isFlipped: false };
      });

      const timer = setTimeout(() => {
        setCards(listAfterFlip);
        setFlippedCardsCounter(0);
        setidOfFlippedCards([]);
      }, TIME_FOR_PEEK);

      return () => clearTimeout(timer);
    }

    if (
      flippedCardsCounter === 2 &&
      idOfFlippedCards[0] === idOfFlippedCards[1]
    ) {
      setCounterOfMatches(counterOfMatches + 1);
      const listAfterFlip = cards.map((element: any) => {
        if (
          element.iconId === idOfFlippedCards[0] ||
          element.iconId === idOfFlippedCards[1]
        ) {
          return { ...element, isFlipped: true, isMatched: true };
        }
        return element;
      });

      const timer = setTimeout(() => {
        setCards(listAfterFlip);
        setFlippedCardsCounter(0);
        setidOfFlippedCards([]);
      }, TIME_FOR_PEEK);

      return () => clearTimeout(timer);
    }
  }, [cards]);

  const toggleClass = (id: string) => {
    if (flippedCardsCounter < 2) {
      const listAfterClick = cards.map((element: any) => {
        if (id === element.id) {
          setFlippedCardsCounter(flippedCardsCounter + 1);
          setidOfFlippedCards([...idOfFlippedCards, element.iconId]);
          return { ...element, isFlipped: true };
        }
        if (id === element.id && element.iconId === idOfFlippedCards) {
          return { ...element, isMatched: true };
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
