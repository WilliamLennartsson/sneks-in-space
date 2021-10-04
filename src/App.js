import "./App.css";
// import Game, { GameLoader } from "./game";
import { GameLoader } from './game'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameLoader />
      </header>
    </div>
  );
}

export default App;
