const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  //turns is gameTurns, contains the array of turns
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    //creates a dynamic array of turns and updates the gameboard, grows with every click (turn)
    const { player, square } = turn; //pulls the player and square from the current iteration of the turn
    const { row, col } = square;

    gameBoard[row][col] = player; //updates the gameboard with the player symbol
  }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard)
  // function handleCellClick(rowIndex, colIndex) {
  // setGameBoard((prevgameBoard) => {
  //     const newgameBoard = [...prevgameBoard.map(innerArray => [...innerArray])] // map copies the nested arrays and spreads them into a new array
  //     newgameBoard[rowIndex][colIndex] = activePlayerSymbol
  //     return newgameBoard
  // })
  // onSelectSquare()
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
