import React from "react";
import "./winner-screen.styles.scss";
import { Link } from "react-router-dom";

const WinnerScreen = () => {
  return (
    <div data-testid="winner-screen" className="winner-screen-container">
      <div className="winner-header">Congratulations!</div>
      <div className="winnerscreen-button-container">
        <Link to="/">
          <div className="winnerscreen-button">TRY AGAIN</div>
        </Link>
      </div>
    </div>
  );
};

export default WinnerScreen;
