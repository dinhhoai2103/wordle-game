import React, { useState } from 'react';
import Key from 'Components/Key';
import { useDispatch, useSelector } from 'react-redux';
import { setBoard, decPosition, incRow } from 'redux/reducers/boardSlice';
import './styles.css';

const Keyboard = () => {
  const [isWin, setIsWin] = useState(false);
  const rows = ['q w e r t y u i o p', 'a s d f g h j k l', 'z x c v b n m'];
  const board = useSelector((state) => state.board.board);
  const position = useSelector((state) => state.board.position);
  const row = useSelector((state) => state.board.row);
  const correctWord = useSelector((state) => state.board.correctWord);
  const allWords = useSelector((state) => state.board.allWords);
  const dispatch = useDispatch();
  const enterWord = `${board[position - 5]}${board[position - 4]}${
    board[position - 3]
  }${board[position - 2]}${board[position - 1]}`.toLowerCase();
  const handleRemoveLetter = () => {
    if (Math.floor((position - 1) / 5) < row) return;
    const newBoard = [...board];
    newBoard[position - 1] = '';
    dispatch(setBoard(newBoard));
    dispatch(decPosition());
  };
  const handleEnter = () => {
    if (allWords.includes(enterWord)) {
      if (position !== 0 && position % 5 === 0) {
        dispatch(incRow());
      }
    }
    if (!allWords.includes(enterWord)) {
      alert('Invalid word');
    }
    if (position === 30 && allWords.includes(enterWord)) {
      alert('The word is: ' + correctWord);
    }
    if (correctWord === enterWord) {
      setIsWin(true);
    }
  };
  return (
    <div className="keyboard-container">
      {rows.map((item, rowId) => (
        <div className="row-element" key={`${item}-${rowId}`}>
          {rowId === 2 && (
            <span className="letter-row" onClick={!isWin ? handleEnter : null}>
              Enter
            </span>
          )}
          {item.split(' ').map((letter, index) => (
            <div key={`${item}-${index}`} className="letter-row">
              <Key letter={letter} isWin={isWin} />
              {letter === 'm' && (
                <span onClick={!isWin ? handleRemoveLetter : null}>Back</span>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
