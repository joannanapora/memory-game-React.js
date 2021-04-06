import React, { useState, useEffect } from "react";
import Card from "../card/card.component";
import "../card-list/card-list.scss";
import { ICard } from "../interfaces/card.interface";
import WinnerScreen from "../winner-screen/winner-screen.component";

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
