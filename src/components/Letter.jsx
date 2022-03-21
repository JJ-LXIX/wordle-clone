import React, { useContext } from "react";
import { AppContext } from "../App";

const Letter = ({ letterPos, attemptVal }) => {
  const { board, rightWord, currAttempt } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  const correct = rightWord[letterPos] === letter;

  const almost = !correct && letter === "" && rightWord.includes(letter);

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;
