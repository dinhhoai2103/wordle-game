import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBoard, incPosition } from 'redux/reducers/boardSlice';
import './styles.css';

const Key = ({ letter, isWin }) => {
  const board = useSelector((state) => state.board.board);
  const position = useSelector((state) => state.board.position);
  const row = useSelector((state) => state.board.row);
  const dispatch = useDispatch();
  const currentRow = Math.floor(position / 5);
  const chooseLetter = () => {
    if (position >= 30) return;
    if (isWin) return;
    if (currentRow > row) return;
    const newBoard = [...board];
    newBoard[position] = letter;
    dispatch(setBoard(newBoard));
    dispatch(incPosition());
  };
  return (
    <div className="key-element" onClick={chooseLetter}>
      {letter}
    </div>
  );
};

export default Key;
