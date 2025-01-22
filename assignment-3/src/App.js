import './App.css';
import { useState } from 'react';

import blank from './symbols/blank.png';
import ex from './symbols/x.png';
import oh from './symbols/o.png';

function App() {
  const [boardSymbols, setBoardSymbols] = useState(Array(9).fill(blank));
  const [isXNext, setIsXNext] = useState(true);
  const [gameState, setGameState] = useState('X to move');

  const handleClick = (index) => {
    let status;
    if (boardSymbols[index] === blank) {
      const newBoard = [...boardSymbols];
      newBoard[index] = isXNext ? ex : oh;
      setBoardSymbols(newBoard);
      setIsXNext(!isXNext);

      // Calculate winner after state change
      const winner = calculateWinner(newBoard);
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = `Next player: ${isXNext ? 'O' : 'X'}`;  // Switch players
      }
      setGameState(status);
    }
  };

  const resetGame = () => {
    setBoardSymbols(Array(9).fill(blank));
    setIsXNext(true);
    setGameState('X to move');
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] !== blank) {
        return squares[a] === ex ? 'X' : 'O';
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
              <img className="symbol" src={val} alt="XO" onClick={() => handleClick(ind)} key={ind}></img>
            )
          })
        }
      </div>
      <button className="resetBtn" onClick={resetGame}> RESET </button>
    </div>
  );
}

export default App;
