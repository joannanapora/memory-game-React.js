import React, { useState } from "react";
import "./card.component.scss";
import {ReactComponent as MemoryIcon} from '../assets/001-arc de triomphe.svg';

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleClass = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div onClick={toggleClass} className='card'>
      <div className={isFlipped ? "card-inner-flipped" : "card-inner"}>
        <div className="card-face card-face-front">
          <h3>Memory Card</h3>
        </div>
        <div className="card-face card-face-back">
          <div className="card-content">
          <MemoryIcon className='icon' />
            <div className="card-header"></div>
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
