import React from "react";

function KeyboardRow({ keys, letterStatusMap }) {
  // debugger;
  function getLetterClassString(letter) {
    if (letterStatusMap.has(letter)) {
      const letterStatus = letterStatusMap.get(letter);
      return `keyboardKey ${letterStatus}`;
    }
    return "keyboardKey";
  }
  return (
    <div>
      {keys.map((key, index) => {
        return (
          <button
            key={index}
            className={getLetterClassString(key.toUpperCase())}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default KeyboardRow;
