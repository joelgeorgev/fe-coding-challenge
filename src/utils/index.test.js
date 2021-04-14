import { calculateWinner } from '.';

const player = 'X';

describe('calculateWinner', () => {
  test('is a function', () => {
    expect(typeof calculateWinner).toEqual('function');
  });

  test.each([
    [
      [
        [player, player, player],
        [null, null, null],
        [null, null, null]
      ]
    ],
    [
      [
        [null, null, null],
        [player, player, player],
        [null, null, null]
      ]
    ],
    [
      [
        [null, null, null],
        [null, null, null],
        [player, player, player]
      ]
    ]
  ])('returns a winner if a row has 3 uninterrupted selections by a player', (board) => {
    expect(calculateWinner(board)).toEqual(player);
  });

  test.each([
    [
      [
        [player, null, null],
        [player, null, null],
        [player, null, null]
      ]
    ],
    [
      [
        [null, player, null],
        [null, player, null],
        [null, player, null]
      ]
    ],
    [
      [
        [null, null, player],
        [null, null, player],
        [null, null, player]
      ]
    ]
  ])('returns a winner if a column has 3 uninterrupted selections by a player', (board) => {
    expect(calculateWinner(board)).toEqual(player);
  });

  test.each([
    [
      [
        [player, null, null],
        [null, player, null],
        [null, null, player]
      ]
    ],
    [
      [
        [null, null, player],
        [null, player, null],
        [player, null, null]
      ]
    ]
  ])('returns a winner if a diagonal has 3 uninterrupted selections by a player', (board) => {
    expect(calculateWinner(board)).toEqual(player);
  });

  test.each([
    [
      [
        [player, null, null],
        [null, null, null],
        [null, null, null]
      ]
    ]
  ])('returns `null` in all other cases', (board) => {
    expect(calculateWinner(board)).toEqual(null);
  });
});
