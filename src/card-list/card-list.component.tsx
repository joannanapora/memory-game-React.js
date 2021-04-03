import React, { useState, useEffect } from "react";
import Card from "../card/card.component";
import "../card-list/card-list.scss";

const TIME_FOR_PEEK = 800;

interface ICard {
  id: number;
  isFlipped: boolean;
  icon: any;
}

enum AMOUNT_OF_CARDS {
  SMALL = 16,
  MEDIUM = 24,
  LARGE = 32,
}

const CardList = ({
  classOfGrid,
  cardsAfterPick,
}: {
  classOfGrid: string;
  cardsAfterPick: ICard[];
}) => {
  const [cards, setCards] = useState<ICard[]>(cardsAfterPick);
  const [flippedCardsCounter, setFlippedCardsCounter] = useState<number>(0);
  const [idOfFirstCard, setIdOfFirstCard] = useState<number>(123);

  useEffect(() => {
    if (cardsAfterPick.length !== cards.length) {
      setCards(cardsAfterPick);
    }
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
  }, [flippedCardsCounter, cardsAfterPick]);

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
      {cards?.map((card: any, i) => {
        return (
          <Card
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
