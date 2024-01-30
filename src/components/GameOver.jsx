export default function GameOver({ winner, whenPresssed }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} wins!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={whenPresssed}>Rematch!</button>
      </p>
    </div>
  );
}
