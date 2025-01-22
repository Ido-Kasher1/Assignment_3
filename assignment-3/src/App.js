import './App.css';

function App() {
  const gameState = 'X to move'; // template
  const symbol = 'https://i0.wp.com/dowse.co.uk/wp-content/uploads/2020/03/white-square-1.png?fit=600%2C600&ssl=1'; // placeholder
  const boardSymbols = [symbol, symbol, symbol, symbol, symbol, symbol, symbol, symbol, symbol];

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
              <img className="symbol" src={symbol} alt="XO"></img>
            )
          })
        }
      </div>
      <button className="resetBtn" onClick={resetGame}> RESET </button>
    </div>
  );
}

export default App;
