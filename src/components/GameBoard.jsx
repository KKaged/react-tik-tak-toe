const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { player, square } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
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
