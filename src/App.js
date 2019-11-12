import React from 'react';
import './App.css';

import BitcoinPriceContainer from "./containers/BitcoinPriceContainer"

function App() {
  return (
    <div className="App">
      <h1>Bitcoin index prices</h1>
      <BitcoinPriceContainer />
    </div>
  );
}

export default App;
