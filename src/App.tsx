import { useState } from 'react'
import Keyboard from './components/Keyboard'
import { data } from './data'
import Board from './components/Board';
import Hangman from './components/Hangman';
import './AppStyles.css'

function App() {
  const [guessWord, setGuessWord] = useState(() => { 
    return data[Math.floor(Math.random()*data.length)]})
  const [guessedLetters, setGuessedLetters] = useState<string[]>([...guessWord].map(l => "_"))
  const [count, setCount] = useState(0)


  function handelReset() { 
    setGuessWord(data[Math.floor(Math.random() * data.length)])
    setCount(0)
    setGuessedLetters([...guessWord].map(l => "_"))
  }



  return (
    <div className="App">
      <button className={count >= 6 ? 'reset-btn' : "hidden"}
        onClick={handelReset}>Play Again</button> 
      <Hangman count={count}/>
      <Board 
        word={guessWord }
        count={count}
        guessedLetters={guessedLetters}
         />
      <Keyboard setGuessedLetters={setGuessedLetters}
        word={guessWord}
        guessedLetters={guessedLetters}
        setCount={setCount} />
    </div>
  )
}

export default App
