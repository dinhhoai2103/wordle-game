import React from 'react';
import Board from 'Components/Board';
import Heading from 'Components/Heading';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const board = useSelector((state) => state.board.board);
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
