import React from "react";
import Square from "./square";

const Board = ({sq,onClick}) =>
(
    <div className="board">
        {sq.map((square,i) =>
        (
            <Square key={i} val={square} onClick={() => onClick(i)} />
        ))}
    </div>
);

export default Board;