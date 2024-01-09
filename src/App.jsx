import Player from "./components/Player"

function App() {
  

  return (
<main>
  <div id='game-container'>
<ol id='players'>
  <Player name='Max' symbol='X'/>
  <Player name='Checo' symbol='O' />
</ol>
    GAME BOARD
  </div>
  LOG INFO
</main>  )
}

export default App
