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

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

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
      <button className="resetBtn" onClick={resetGame}> RESET </button>
    </div>

  );
}
  
export default App;