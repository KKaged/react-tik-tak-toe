import Player from "./components/Player"
import GameBoard from "./components/GameBoard"

function App() {
  

  return (
<main>
  <div id='game-container'>
    <ol id='players'>
      <Player InitialName='Player 1' symbol='X'/>
      <Player InitialName='Player 2' symbol='O' />
    </ol>
    <GameBoard />
  </div>
  LOG INFO
</main>  )
}

export default App
