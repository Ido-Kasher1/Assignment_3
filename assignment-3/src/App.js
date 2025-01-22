import './App.css';
import { useState } from 'react';

import blank from './symbols/blank.png';
import ex from './symbols/x.png';
import oh from './symbols/o.png';

function App() {
  const [boardSymbols, setBoardSymbols] = useState(Array(9).fill(blank));
  const [isXNext, setIsXNext] = useState(true);

  const gameState = `${isXNext ? 'X' : 'O'} to move`;

  const handleClick = (index) => {
    if (boardSymbols[index] === blank) {
      const newBoard = [...boardSymbols];
      newBoard[index] = isXNext ? ex : oh;

      setBoardSymbols(newBoard);
      setIsXNext(!isXNext);
    }
  };

  return (
    <div className="app">
      <h1>{ gameState }</h1>
      <div className="game">
        {
          boardSymbols.map((val, ind) => {
            return (
              <img className="symbol" src={val} alt="XO" onClick={() => handleClick(ind)}></img>
            )
          })
        }
      </div>
      <button className="resetBtn"> RESET </button>
      </div>
  );
}
  
export default App;