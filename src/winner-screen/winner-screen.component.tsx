import React from "react";
import "./winner-screen.styles.scss";
import { Link } from "react-router-dom";

const WinnerScreen = () => {
  return (
    <div data-testid="winner-screen" className="winner-screen-container">
      <h1 className="header">Congratulations!</h1>
      {/* <h3 className="header">Your time is:</h3>
      <h3 className="header">00:20:03s</h3> */}
      <div className="winnerscreen-button-container">
        <Link to="/">
          <button className="winnerscreen-button">TRY AGAIN</button>
        </Link>
        <button className="winnerscreen-button">EXIT</button>
      </div>
    </div>
  );
};

export default WinnerScreen;
