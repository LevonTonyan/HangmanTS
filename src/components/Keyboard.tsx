import React from 'react'
import './KeyboardStyless.css'


interface KeyboardProps {
    setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>
    guessedLetters: string[]
    word: string
    setCount: React.Dispatch<React.SetStateAction<number>>
 }


const Keyboard = ({setGuessedLetters,guessedLetters, word, setCount }:KeyboardProps) => {
    let alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]



    /////////////////////////////////////////HAndling 
    function handleClick(letter: string) { 
        
        const newGuessed = [...word].map((el, i) => { 
            if (el === letter) { return el }
            else {return "_"}
        })
        if (!newGuessed.filter(el => el !== "_").length) { 
            setCount(prev => prev + 1)
        }
        
    
        guessedLetters.forEach((le, i) => { 
            if (le !== "_") {
                newGuessed[i] = le
            }
        })
        setGuessedLetters((newGuessed))
    }



  return (
      <div className='key-container'>
          {alph.map((l,i) => { 
              return <button
                  key={i}
                  onClick={() => handleClick(l)}
                  className='key'>
                  {l.toUpperCase()}
              </button>
          }) }
    </div>
  )
}

export default Keyboard