import { ICard } from "../interfaces/card.interface";

export const getCardsData = (): ICard[] => {
  let cards = [];
  for (let i = 0; i < 48; i++) {
    cards.push({
      id: `${i}`,
      isFlipped: false,
      icon: `Icon${i}`,
      iconId: i,
      isMatched: false,
    });
  }
  return cards;
};
