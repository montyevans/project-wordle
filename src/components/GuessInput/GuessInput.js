import React from "react";

function GuessInput({ updateGuesses, disableInput }) {
  console.log(disableInput);
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guess == "") return;
        updateGuesses(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guessInput">Enter Guess: </label>
      <input
        id="guessInput"
        type="text"
        placeholder="Enter your guess"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        pattern="[A-Z]{5}"
        spellCheck="false"
        disabled={disableInput}
      />
    </form>
  );
}

export default GuessInput;
