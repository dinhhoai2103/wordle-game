import React from 'react';
import Key from 'Components/Key';
import './styles.css';

const Keyboard = () => {
  const rows = ['q w e r t y u i o p', 'a s d f g h j k l', 'z x c v b n m'];
  return (
    <div className="keyboard-container">
      {rows.map((item, rowId) => (
        <div className="row-element" key={`${item}-${rowId}`}>
          {rowId === 2 && <span className="letter-row">Enter</span>}
          {item.split(' ').map((letter, index) => (
            <div key={`${item}-${index}`} className="letter-row">
              <Key letter={letter} />
              {letter === 'm' && <span>Back</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
