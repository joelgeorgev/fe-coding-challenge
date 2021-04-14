import { runSaga } from 'redux-saga';
import { findWinner } from './findWinner';
import { gameWon } from '../actions/moves';
import { calculateWinner } from '../../utils';
import { createBoard } from '../reducers';

jest.mock('../../utils');

const state = { board: createBoard(3) };

const executeSaga = dispatch => runSaga({ dispatch, getState: () => state }, findWinner);

describe('findWinner saga', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    jest.resetAllMocks();
  });

  describe('When a winner is found', () => {
    const winner = 'X';

    beforeEach(() => {
      calculateWinner.mockReturnValue(winner);

      executeSaga(dispatch);
    });

    test('dispatches an action indicating a win', () => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith(gameWon(winner));
    });
  });

  describe('When a winner is NOT found', () => {
    beforeEach(() => {
      calculateWinner.mockReturnValue(null);

      executeSaga(dispatch);
    });

    test('does NOT dispatch an action indicating a win', () => {
      expect(dispatch).toHaveBeenCalledTimes(0);
    });
  });
});
