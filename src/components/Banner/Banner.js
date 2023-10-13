import React from "react";

function Banner({ gameResult, resetGame }) {
  const { winStatus, numGuesses, answer } = gameResult;
  const resultToClassMap = {
    won: "happy",
    lost: "sad",
  };

  function guessOrGuesses() {
    return numGuesses === 1 ? "guess" : "guesses";
  }

  const bannerClassString = `banner ${resultToClassMap[winStatus]}`;
  const bannerText =
    gameResult.winStatus === "won" ? (
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numGuesses} {guessOrGuesses()}
        </strong>
      </p>
    ) : (
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>
      </p>
    );
  return (
    <div className={bannerClassString}>
      <p>{bannerText}</p>
      <button onClick={resetGame} className="restart">
        Restart
      </button>
    </div>
  );
}

export default Banner;
