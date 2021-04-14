import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Board } from '.';
import configureStore from '../../store';
import { Provider } from 'react-redux';
import { createBoard } from '../../store/reducers';

const renderBoard = state => render(<Provider store={configureStore(state)}><Board /></Provider>);
const findCells = () => screen.getAllByRole('button');

test('renders Board text', () => {
  renderBoard();
  const boardText = screen.getByText(/Board/i);
  expect(boardText).toBeInTheDocument();
});

test('renders the current player', () => {
  const state = { game: { currentPlayer: 'X' } };
  renderBoard(state);

  const currentPlayer = screen.getByText('Player X');
  expect(currentPlayer).toBeInTheDocument();
});

test('renders a board comprised of cells', () => {
  const board = createBoard(3);
  const state = { board };
  renderBoard(state);

  const cells = findCells();
  expect(cells.length).toEqual(9);
});

test('sets current player on clicked cell', () => {
  const currentPlayer = 'X';
  const board = createBoard(3);
  const state = {
    board,
    game: { currentPlayer, winner: null }
  };
  renderBoard(state);

  const firstCell = findCells()[0];
  expect(firstCell.textContent).toEqual('');

  userEvent.click(firstCell);

  expect(firstCell.textContent).toEqual(currentPlayer);
});

test('disables a cell on click', () => {
  const board = createBoard(3);
  const state = { board };
  renderBoard(state);

  const firstCell = findCells()[0];
  expect(firstCell).not.toBeDisabled();

  userEvent.click(firstCell);

  expect(firstCell).toBeDisabled();
});
