import React, { useContext } from "react";
import { AppContext } from "../App";

const Gameover = () => {
  const { gameOver, rightWord, currAttempt } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>{gameOver.guessedWord ? "You guessed it !" : "You failed"}</h3>
      <h1>Correct word was : {rightWord.toUpperCase()}</h1>
      {gameOver.gussedWord && (
        <h3> You guessed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
};

export default Gameover;
