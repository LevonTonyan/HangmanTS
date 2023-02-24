import React from 'react'
import './HangmanStyles.css'

const HEAD = (
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "8px solid black",
        position: "absolute",
        top: "100px",
        right:"50px"
    }}></div>
)
const NEACK = (
    <div style={{
        width: "8px",
        backgroundColor: "black",
        height: "70px",
        position: "absolute",
        top: "150px",
        right:"70px"
    }}>


    </div>
)
const LEFTHAND = (
    <div
        style={{
        width: "8px",
        backgroundColor: "black",
        height: "50px",
        position: "absolute",
        top: "150px",
            right: "90px",
        transform:"rotate(50deg)"
    }}></div>
)
const RIGHTHAND = (
    <div
        style={{
        width: "8px",
        backgroundColor: "black",
        height: "50px",
        position: "absolute",
        top: "150px",
            right: "50px",
        transform:"rotate(-50deg)"
    }}></div>
)
const RIGHTLEG = (
    <div
        style={{
        width: "8px",
        backgroundColor: "black",
        height: "50px",
        position: "absolute",
        top: "207px",
            right: "50px",
        transform:"rotate(-50deg)"
    }}></div>
)
const LEFTTLEG = (
    <div
        style={{
        width: "8px",
        backgroundColor: "black",
        height: "50px",
        position: "absolute",
        top: "207px",
            right: "90px",
        transform:"rotate(50deg)"
    }}></div>
)




interface HagmanProps { 
    count:number
}


const Hangman = ({count}:HagmanProps) => {
  return (
    <div className='hangman-container'>
          <div style={{ height: "10px", backgroundColor: "black", width: "200px", marginTop: "60%"}}></div>
          <div style={{ height: "250px", backgroundColor: "black", width: "10px", position: "absolute", top: "50px" }}></div>
          <div style={{ height: "10px", position: "absolute", backgroundColor: "black", width: "180px", top: "50px", marginLeft: "170px" }}></div>
          <div style={{ height: "50px", backgroundColor: "black", width: "10px", position: "absolute", top: "50px", marginLeft: "350px" }}></div>
          {count > 0&& HEAD}
          {count > 1&&NEACK}
          {count > 2&&LEFTHAND}
          {count > 3&&RIGHTHAND}
          {count > 4&&RIGHTLEG}
          {count > 5&&LEFTTLEG }
    </div>
  )
}

export default Hangman
Hangman