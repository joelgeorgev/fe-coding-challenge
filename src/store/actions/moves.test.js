import * as Actions from './moves'

describe('selectCell', () => {
  it('should create an action to select a cell', () => {
    const expectedAction = {
      type: Actions.SELECT_CELL,
      currentPlayer: 'X',
      row: 0,
      col: 0
    }
    const result = Actions.selectCell('X', 0, 0)
    expect(result).toEqual(expectedAction)
  })
})

describe('gameWon', () => {
  it('should create an action to indicate the game has won', () => {
    const expectedAction = {
      type: Actions.GAME_WON,
      player: 'X'
    }
    const result = Actions.gameWon('X')
    expect(result).toEqual(expectedAction)
  })
})
