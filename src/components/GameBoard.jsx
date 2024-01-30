const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  //turns is gameTurns, contains the array of turns (deriving state from props)
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    //creates a dynamic array of turns and updates the gameboard, grows with every click (turn)
    const { player, square } = turn; //pulls the player and square from the current iteration of the turn
    const { row, col } = square;

    gameBoard[row][col] = player; //updates the gameboard with the player symbol
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null} //if the player symbol is inside the button, disable the button
                >
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
