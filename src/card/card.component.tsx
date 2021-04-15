import React from "react";
import "./card.component.scss";
import CardIcon from "../card-icon/card-icon.component";

const Card = ({
  isFlipped,
  toggleClass,
  cardID,
  icon,
  isMatched,
}: {
  toggleClass: (cardID: string) => void;
  isFlipped: boolean;
  cardID: string;
  icon: string;
  isMatched: boolean;
}) => {
  return isMatched ? (
    <div className="card"></div>
  ) : (
    <div
      onClick={() => toggleClass(cardID)}
      data-testid="Memory"
      className="card"
    >
      <div className={isFlipped ? "card-inner-flipped" : "card-inner"}>
        <div className="card-face card-face-front"></div>
        <div className="card-face card-face-back">
          <div className="card-content">
            <CardIcon iconName={icon} />
            <div className="card-header"></div>
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
