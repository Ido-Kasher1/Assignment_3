import './App.css';

function App() {
  const gameState = 'X to move'; // template
  const symbol = 'https://i0.wp.com/dowse.co.uk/wp-content/uploads/2020/03/white-square-1.png?fit=600%2C600&ssl=1'; // placeholder
  const boardSymbols = [symbol, symbol, symbol, symbol, symbol, symbol, symbol, symbol, symbol];

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
      <button className="resetBtn"> RESET </button>
    </div>
  );
}

export default App;
