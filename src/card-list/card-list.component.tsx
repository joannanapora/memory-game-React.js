import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import Card from "../card/card.component";
import "../card-list/card-list.scss";

const TIME_FOR_PEEK = 800;

export interface ICard {
  id: number;
  isFlipped: boolean;
}

const CardList = ({
  classOfGrid,
  numberOfCards,
}: {
  classOfGrid: string;
  numberOfCards: number;
}) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [flippedCardsCounter, setFlippedCardsCounter] = useState<number>(0);
  const [idOfFirstCard, setIdOfFirstCard] = useState<number>(-1);

  if (numberOfCards !== cards.length) {
    const mockData = [];
    for (let i = 0; i < numberOfCards; i++) {
      mockData.push({ id: i, isFlipped: false });
    }

    setCards(mockData);
  }

  useEffect(() => {
    if (flippedCardsCounter === 2) {
      const listAfterFlip = cards.map((element: any) => {
        return { ...element, isFlipped: false };
      });

      const timer = setTimeout(() => {
        setCards(listAfterFlip);
        setFlippedCardsCounter(0);
        setIdOfFirstCard(-1);
      }, TIME_FOR_PEEK);

      return () => clearTimeout(timer);
    }
  }, [flippedCardsCounter]);

  const toggleClass = (id: number) => {
    if (flippedCardsCounter < 2) {
      const listAfterClick = cards.map((element: any) => {
        if (id === element.id && id !== idOfFirstCard) {
          setFlippedCardsCounter(flippedCardsCounter + 1);
          setIdOfFirstCard(element.id);
          return { ...element, isFlipped: true };
        }
        return element;
      });
      setCards(listAfterClick);
    }
  };

  return (
    <div className={classOfGrid}>
      {cards.map((card: any) => {
        return (
          <Card
            isFlipped={card.isFlipped}
            toggleClass={toggleClass}
            key={card.id}
            cardID={card.id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
