import { useState, useEffect } from "react";
import Keyboard from "./components/Keyboard";
import { data } from "./data";
import Board from "./components/Board";
import Hangman from "./components/Hangman";
import "./AppStyles.css";

function App() {
  const [guessWord, setGuessWord] = useState<string>(
    () => data[Math.floor(Math.random() * data.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState<string[]>(
    new Array(guessWord.length).fill("_", 0, guessWord.length)
  );
  const [count, setCount] = useState(0);
  const [disKeys, setDisKeys] = useState<string[]>([]);

  function handelReset() {
    setGuessWord(data[Math.floor(Math.random() * data.length)]);
  }

  useEffect(() => {
    setGuessedLetters(
      new Array(guessWord.length).fill("_", 0, guessWord.length)
    );
    setCount(0);
    setDisKeys([]);
  }, [guessWord]);

  return (
    <div className="App">
      <div className="status-conteiner">
        {!guessedLetters.includes("_") ? "You Won!!!" : ""}
        <div className={count >= 6 ? "reset-btn" : "hidden"}>
          <button className="reset-btn" onClick={handelReset}>
            Play Again
          </button>
          <h1>You loose!!!</h1>
        </div>
      </div>

      <Hangman count={count} />
      <Board word={guessWord} count={count} guessedLetters={guessedLetters} />
      <Keyboard
        setGuessedLetters={setGuessedLetters}
        word={guessWord}
        guessedLetters={guessedLetters}
        setCount={setCount}
        disKeys={disKeys}
        setDisKeys={setDisKeys}
      />
    </div>
  );
}

export default App;
