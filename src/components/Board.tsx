
import './BoardStyles.css'
import { v4 as uuidv4 } from 'uuid';


interface BoardProps { 

    guessedLetters: string[]
    count: number
    word:string
  
    
}





const Board = ({guessedLetters, count, word }: BoardProps) => {
  


console.log(count)
  return (
      <div className='board'>
          {count < 6 ? (
              guessedLetters.map(el => <span key={uuidv4()} className='letter'>{el}</span>)
          ) : word}
          
    </div>
  )
}

export default Board
