import React from 'react';
import './styles.css';

const Square = ({ index, value }) => {
  return (
    <div className="square-element" key={index}>
      {value}
    </div>
  );
};

export default Square;
