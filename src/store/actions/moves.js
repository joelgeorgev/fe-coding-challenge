export const SELECT_CELL = 'SELECT_CELL'
export const GAME_WON = 'GAME_WON'

export function selectCell(currentPlayer, row, col) {
  return {
    type: SELECT_CELL,
    currentPlayer,
    row,
    col
  }
}

export function gameWon(player) {
  return {
    type: GAME_WON,
    player
  }
}
