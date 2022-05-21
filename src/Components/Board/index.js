import Square from 'Components/Square';
import React from 'react';
import './styles.css';

const Board = ({ board }) => {
  return (
    <div className="board-element">
      {board.map((item, index) => (
        <Square index={index} value={item} />
      ))}
    </div>
  );
};

export default Board;
