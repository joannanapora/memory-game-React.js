import React from "react";
import Card from "../card/card.component";
import "../card-list/card-list.scss";


const CardList = ({ numberOfCards, classOfGrid }: {numberOfCards: number, classOfGrid: string}) => {
  let rows = [];

  for (let i = 0; i < numberOfCards; i++) {
    rows.push(<Card key={i} />);
  }

  return <div className={classOfGrid}>{rows}</div>;
};

export default CardList;
