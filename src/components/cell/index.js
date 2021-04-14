import React from 'react';
import './index.css';

export const Cell = ({ value, isDisabled, handleClick }) => (
  <button
    className="Cell"
    disabled={isDisabled}
    onClick={handleClick}
  >
    {value}
  </button>
);
