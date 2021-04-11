import React from "react";
import "./winner-screen.styles.scss";
import { Link } from "react-router-dom";

const WinnerScreen = ({
  minutes,
  seconds,
}: {
  minutes: number;
  seconds: number;
}) => {
  return (
    <div data-testid="winner-screen" className="winner-screen-container">
      <div className="winner-header">Congratulations!</div>
      <div className="winner-header">
        <br />
        Your time:
        <br /> {minutes} min and {seconds} sec!
      </div>
      <div className="winnerscreen-button-container">
        <Link to="/">
          <div className="winnerscreen-button">TRY AGAIN</div>
        </Link>
      </div>
    </div>
  );
};

export default WinnerScreen;
