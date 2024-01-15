import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
const [gameBoard, setGameBoard] = useState(initialGameBoard)
function handleCellClick(rowIndex, colIndex) {
setGameBoard((prevgameBoard) => {
    const newgameBoard = [...prevgameBoard.map(innerArray => [...innerArray])] // map copies the nested arrays and spreads them into a new array
    newgameBoard[rowIndex][colIndex] = activePlayerSymbol
    return newgameBoard
})
onSelectSquare()
}

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex) => (
                    <li key={colIndex}>
                        <button onClick={() => handleCellClick(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>
                    ))}
                </ol>
            </li>))}
        </ol>
    )
}