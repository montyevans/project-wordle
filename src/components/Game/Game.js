import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import Keyboard from "../Keyboard";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  });

  const resetGame = () => {
    setGuesses([]);
    setAnswer(sample(WORDS));
  };

  // To make debugging easier, we'll log the solution in the console.

  console.log(answer);

  function updateGuesses(newGuess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      window.alert("You've run out of guesses!");
      return;
    }
    setGuesses([...guesses, newGuess]);
  }

  function isGameOver() {
    return (
      guesses.length >= NUM_OF_GUESSES_ALLOWED ||
      guesses[guesses.length - 1] === answer
    );
  }

  function getGameResult() {
    return {
      winStatus: guesses[guesses.length - 1] === answer ? "won" : "lost",
      numGuesses: guesses.length,
      answer,
    };
  }

  return (
    <>
      <GuessResults guessResults={guesses} answer={answer} />
      <GuessInput updateGuesses={updateGuesses} disableInput={isGameOver()} />
      <Keyboard guesses={guesses} answer={answer} />
      {isGameOver() && (
        <Banner gameResult={getGameResult()} resetGame={resetGame} />
      )}
    </>
  );
}

export default Game;
