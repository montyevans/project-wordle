import React from "react";

import { range } from "../../utils";

import { WORD_LENGTH } from "../../constants";

import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const validGuess = guess === undefined || guess.length === WORD_LENGTH;
  if (!validGuess) {
    throw new Error("Guess value must be undefined or have length WORD_LENGTH");
  }

  function generateClassString(letterIndex) {
    const baseClass = "cell";
    if (guess === undefined) return baseClass;
    const letterStatuses = checkGuess(guess, answer);
    const statusClass = letterStatuses[letterIndex]["status"];
    return `${baseClass} ${statusClass}`;
  }

  return (
    <div className="guess">
      {range(0, WORD_LENGTH).map((index) => (
        <span className={generateClassString(index)} key={index}>
          {guess !== undefined && guess[index]}
        </span>
      ))}
    </div>
  );
}

export default Guess;
