import React from "react";
import Card from "../card/card.component";
import "../card-list/card-list.scss";

const CardList = ({ numberOfCards, classOfGrid }) => {
  let rows = [];

  for (let i = 0; i < numberOfCards; i++) {
    rows.push(<Card key={i} />);
  }

  return <div className={classOfGrid}>{rows}</div>;
};

export default CardList;
