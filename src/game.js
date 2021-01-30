import React, { useState } from "react";
import Board from "./board";
import { calculateWinner } from "./winner";

const Game = () =>
{
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xNext, setXNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);
    const winner = calculateWinner(history[stepNumber]);
    const turn = xNext ? "X" : "O"; //turn dependent

    const handleClick = (i) =>
    {
        const historyPoint = history.slice(0, stepNumber+1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        
        if(winner || squares[i]) //square already occupied or winner already established: do nothing
        {
            return;
        }
        squares[i] = turn;
        setHistory([...historyPoint,squares]);
        setStepNumber(historyPoint.length);
        setXNext(!xNext);
    };

    const jumpTo = (step) =>
    {
        setStepNumber(step);
        setXNext(step % 2 === 0);
    };
    
    return (
        <>
            <h1> Brainpoint Coding Challenge: Tic Tac Toe </h1>
            <Board sq={history[stepNumber]} onClick={handleClick} />
            <div className="info-wrapper">
                <h2>{winner ? winner + " Wins!": "Next Move: " + turn}</h2>
                <div>
                <button onClick={() => jumpTo(0)}>Restart Game</button>
                </div>
            </div>
        </>
    );
}

export default Game;