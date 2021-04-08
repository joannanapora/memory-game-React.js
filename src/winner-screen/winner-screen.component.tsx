import React from "react";
import "./winner-screen.styles.scss";
import { Link } from "react-router-dom";

const WinnerScreen = () => {
  return (
    <div data-testid="winner-screen" className="winner-screen-container">
      <h1>Congratulations!</h1>
      <div className="winnerscreen-button-container">
        <Link to="/">
          <button className="winnerscreen-button">TRY AGAIN</button>
        </Link>
      </div>
    </div>
  );
};

export default WinnerScreen;
