import React from "react";
import "./card.component.scss";

const Card = ({
  isFlipped,
  toggleClass,
  cardID,
  icon,
}: {
  toggleClass: (cardId: number) => void;
  isFlipped: boolean;
  cardID: number;
  icon: string;
}) => {
  return (
    <div onClick={() => toggleClass(cardID)} className="card">
      <div className={isFlipped ? "card-inner-flipped" : "card-inner"}>
        <div className="card-face card-face-front">
          <h3>Memory</h3>
          <h3>Card</h3>
        </div>
        <div className="card-face card-face-back">
          <div className="card-content">
            {icon}
            <div className="card-header"></div>
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
