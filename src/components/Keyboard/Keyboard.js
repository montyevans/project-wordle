import React from "react";
import { keyboardKeys } from "../../constants";
import KeyboardRow from "../KeyboardRow";

import { checkGuess } from "../../game-helpers";

function Keyboard({ guesses, answer }) {
  function getLetterStatusMap(guesses) {
    // debugger;
    const letterStatusMap = new Map();
    guesses.forEach((guess) => {
      if (guess === undefined) return;
      const letterResults = checkGuess(guess, answer);
      letterResults.forEach(({ status }, letterIdx) => {
        const letter = guess[letterIdx];
        if (!letterStatusMap.has(letter)) {
          letterStatusMap.set(letter, status);
          return;
        }
        const currentStatus = letterStatusMap.get(letter);
        // If the status from this guess supercedes the current status, update the map
        if (
          status === "correct" ||
          (status === "misplaced" && currentStatus === "incorrect")
        ) {
          letterStatusMap.set(letter, status);
        }
      });
    });
    return letterStatusMap;
  }

  const letterStatusMap = getLetterStatusMap(guesses);

  return (
    <div className="keyboard">
      <KeyboardRow keys={keyboardKeys[0]} letterStatusMap={letterStatusMap} />
      <KeyboardRow keys={keyboardKeys[1]} letterStatusMap={letterStatusMap} />
      <KeyboardRow keys={keyboardKeys[2]} letterStatusMap={letterStatusMap} />
    </div>
  );
}

export default Keyboard;
