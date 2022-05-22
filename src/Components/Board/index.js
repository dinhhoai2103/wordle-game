import Keyboard from 'Components/Keyboard';
import Square from 'Components/Square';
import React from 'react';
import './styles.css';

const Board = ({ board }) => {
  return (
    <>
      <div className="board-element">
        {board.map((item, index) => (
          <Square key={`${item}-${index}`} index={index} value={item} />
        ))}
      </div>
      <div className="keyboard">
        <Keyboard />
      </div>
    </>
  );
};

export default Board;
