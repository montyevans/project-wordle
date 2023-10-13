import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessResults({ guessResults, answer }) {
  const emptyGuesses = NUM_OF_GUESSES_ALLOWED - guessResults.length;
  const emptyGuessesArray = Array(emptyGuesses).fill(undefined);
  const guessList = guessResults.concat(emptyGuessesArray);
  return (
    <ul className="guess-results">
      {guessList.map((guess, index) => (
        <Guess key={index} guess={guess} answer={answer}></Guess>
      ))}
    </ul>
  );
}

export default GuessResults;
