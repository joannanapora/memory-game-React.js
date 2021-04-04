import React, { useState, useEffect } from "react";
import Card from "../card/card.component";
import "../card-list/card-list.scss";
import { ICard } from "../interfaces/card.interface";

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
  const [iconIdOfFirstElement, setIconIdOfFirstCard] = useState<number[]>([]);

  useEffect(() => {
    if (cardsAfterPick.length !== cards.length) {
      setCards(cardsAfterPick);
    }
    if (
      flippedCardsCounter === 2 &&
      iconIdOfFirstElement[0] !== iconIdOfFirstElement[1]
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
        setIconIdOfFirstCard([]);
      }, TIME_FOR_PEEK);

      return () => clearTimeout(timer);
    }

    if (
      flippedCardsCounter === 2 &&
      iconIdOfFirstElement[0] === iconIdOfFirstElement[1]
    ) {
      const listAfterFlip = cards.map((element: any) => {
        if (
          element.iconId === iconIdOfFirstElement[0] ||
          element.iconId === iconIdOfFirstElement[1]
        ) {
          return { ...element, isFlipped: true, isMatched: true };
        }
        return element;
      });

      const timer = setTimeout(() => {
        setCards(listAfterFlip);
        setFlippedCardsCounter(0);
        setIconIdOfFirstCard([]);
      }, TIME_FOR_PEEK);

      return () => clearTimeout(timer);
    }
  }, [flippedCardsCounter, classOfGrid]);

  const toggleClass = (id: string) => {
    if (flippedCardsCounter < 2) {
      const listAfterClick = cards.map((element: any) => {
        if (id === element.id) {
          setFlippedCardsCounter(flippedCardsCounter + 1);
          setIconIdOfFirstCard([...iconIdOfFirstElement, element.iconId]);
          return { ...element, isFlipped: true };
        }
        if (id === element.id && element.iconId === iconIdOfFirstElement) {
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
