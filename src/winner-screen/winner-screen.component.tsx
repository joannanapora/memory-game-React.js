import React from "react";
import "./winner-screen.styles.scss";
import { Link } from "react-router-dom";

const WinnerScreen = ({
  minutes,
  seconds,
<<<<<<< Updated upstream
}: {
  minutes: number;
  seconds: number;
=======
}: // moves,
{
  minutes: number;
  seconds: number;
  // moves: number;
>>>>>>> Stashed changes
}) => {
  return (
    <div data-testid="winner-screen" className="winner-screen-container">
      <div className="winner-header">Congratulations!</div>
      <div className="winner-header">
        <br />
        Your time:
        <br /> {minutes} min and {seconds} sec!
      </div>
<<<<<<< Updated upstream
=======
      <div className="winner-header">
        <br />
        Your moves:
        {/* <br /> {moves} */}
      </div>
>>>>>>> Stashed changes
      <div className="winnerscreen-button-container">
        <Link to="/">
          <div className="winnerscreen-button">TRY AGAIN</div>
        </Link>
      </div>
    </div>
  );
};

export default WinnerScreen;
