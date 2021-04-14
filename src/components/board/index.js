import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectCell } from '../../store/actions/moves';
import { Cell } from '../cell';

const selectBoard = (state) => state.board
const selectGame = (state) => state.game

export const Board = () => {
  const board = useSelector(selectBoard)
  const game = useSelector(selectGame)
  const dispatch = useDispatch()

  const handleCellClick = (rowIndex, colIndex) => {
    dispatch(selectCell(game.currentPlayer, rowIndex, colIndex))
  }

  return (
    <div className="Board">
      Board
      <div>Player {game.currentPlayer}</div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="Board-row">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              isDisabled={board[rowIndex][colIndex] !== null}
              handleClick={() => handleCellClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
