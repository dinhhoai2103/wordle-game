import React from 'react';
import './styles.css';

const Heading = ({ type, text }) => {
  return <p className={type}>{text}</p>;
};

export default Heading;
