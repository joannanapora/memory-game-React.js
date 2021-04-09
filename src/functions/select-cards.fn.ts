import { v4 as uuid } from "uuid";
import { ICard } from "../interfaces/card.interface";
import { getCardsData } from "../card-list/cards-data";

export const prepareSetOfCards = (cardPairs: number) => {
  let listOfCards: ICard[] = [];
  let i = cardPairs;
  let j = 0;
  let counter = 0;

  while (counter !== i) {
    j = Math.floor(Math.random() * getCardsData().length);
    const objectToAdd = { ...getCardsData()[j], id: uuid() };

    const isInObject = listOfCards.find(
      (element) => element.iconId === objectToAdd.iconId
    );

    if (!isInObject) {
      listOfCards.push(objectToAdd);
      listOfCards.push({ ...objectToAdd, id: uuid() });
      counter++;
    }
  }
  return listOfCards;
};
