import { takeEvery } from 'redux-saga/effects'
import { SELECT_CELL } from '../actions/moves'
import { findWinner } from './findWinner'

export default function* rootSaga() {
  yield takeEvery(SELECT_CELL, findWinner);
}
