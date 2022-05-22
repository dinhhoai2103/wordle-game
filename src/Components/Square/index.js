import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import './styles.css';

const Square = ({ index, value }) => {
  const correctWord = useSelector((state) => state.board.correctWord);
  const position = useSelector((state) => state.board.position);
  const row = useSelector((state) => state.board.row);
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [almost, setAlmost] = useState(false);

  const currentPos = (position - 1) % 5;
  const variants = {
    filled: () => ({
      scale: [1.2, 1],
      transition: { duration: 0.2 },
    }),
    unfilled: () => ({
      scale: [1.2, 1],
      transition: { duration: 0.2 },
    }),
  };
  useEffect(() => {
    if (correctWord[currentPos] === value) {
      setCorrect(true);
    } else if (
      !correct &&
      value !== '' &&
      correctWord.includes(value)
    ) {
      setAlmost(true);
    } else if (
      !correct &&
      value !== '' &&
      !correctWord.includes(value)
    ) {
      setWrong(true);
    }
    return () => {
      setCorrect(false);
      setWrong(false);
      setAlmost(false);
    };
  }, [value]);

  const status =
    Math.floor(index / 5) < row &&
    (correct ? 'correct' : wrong ? 'wrong' : almost ? 'almost' : '');

  return (
    <motion.div
      animate={value ? 'filled' : 'unfilled'}
      variants={variants}
      className={`square-element ${status}`}
      key={index}
    >
      {value}
    </motion.div>
  );
};

export default Square;
