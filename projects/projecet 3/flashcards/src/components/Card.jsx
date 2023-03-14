import React from "react";
import "../Card.css"
import { useState } from 'react';

let cardLst = [
    {
        "text":"What language is this: 'Min Zhong'",
        "src":"../public/china.png",
        "answer":"China"
    },
    {
      "text":"What language is this: 'English'",
      "src":"../public/united kingdom.png",
      "answer":"United Kingdom"
    },
    {
        "text":"What language is this: 'Xiang'",
        "src":"../public/china.png",
        "answer":"China"
    },
    {
        "text":"What language is this: 'Turkish'",
        "src":"../public/turkey.png",
        "answer":"Turkey"
    },
    {
        "text":"What language is this: 'Italian'",
        "src":"../public/italy.png",
        "answer":"Italy"
    }
]
const colors = ["red","green","purple","yellow","blue"]

const Card = (props) => {
    let [card, setCard] = useState(0);
    let [color, setColor] = useState();
    let [score, setScore] = useState(0);

    const updateColor = () => {
        setColor(Math.floor(Math.random() * colors.length)) //returns a number from 0 to max colorLst length
    }

    const nextCard = () => {
        if (card == cardLst.length-1) {
            card = 0
            setCard(card)
        } else {
            setCard(card + 1)
        } //when on last card and click next goes to first cardLst data
        // console.log(card)
        updateColor()
    } //sets the current card component to next card data

    const prevCard = () => {
        if (card == 0) {
            card = cardLst.length-1
            setCard(card)
        } else {
            setCard(card - 1)
        } //when on first card and click previous goes to last cardLst data
        updateColor()
    } //sets the current card component to previous card data

    const updateScore = () => {
        let cardGuess = document.querySelector("#card-guess").value
        if (cardGuess == cardLst[card].answer.toLowerCase() || cardGuess == cardLst[card].answer) {
           setScore(score + 1)
           nextCard() 
        } else{
            setScore(score - 1)
        }
        document.querySelector("#card-guess").value = "";
    }

    return (
        <div id="card-container">
            <div className="card" style={{backgroundColor: colors[color]}}>
                <div id="scoreboard">
                    <h3>Your score is: {score}</h3>
                </div>
                <h1>{cardLst[card].text}</h1>
                <h3>{cardLst[card].answer}</h3>
                <img src={cardLst[card].src} alt="" />
            </div>
            <div id="guess-card-container">
                <h3>Enter your guess here: </h3>
                <input type="text" placeholder="Place your answer here..." id="card-guess"/>
                <button onClick={updateScore}>Submit Guess</button>
            </div>
            <div>
                <button id="previous" onClick={prevCard}>Previous</button>
                <button id="next" onClick={nextCard}>Next</button>
            </div>
        </div>
    )
}

export default Card;