import { select, put } from 'redux-saga/effects';
import { gameWon } from '../actions/moves';
import { calculateWinner } from '../../utils';

const selectBoard = (state) => state.board;

export const findWinner = function* () {
  const board = yield select(selectBoard);
  const winner = calculateWinner(board);

  if (winner) {
    yield put(gameWon(winner));
  }
};
