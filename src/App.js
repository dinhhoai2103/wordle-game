import React, { useState } from 'react';
import Board from 'Components/Board';
import Heading from 'Components/Heading';
import './App.css';

function App() {
  const [board, setBoard] = useState([
    '', '', '', '', '',
    '', '', '', '', '',
    '', '', '', '', '',
    '', '', '', '', '',
    '', '', '', '', '',
    '', '', '', '', ''
  ])
  return (
    <div className="App">
      <Heading type="h1" text="Wordle" />
      <div className="board-container">
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
