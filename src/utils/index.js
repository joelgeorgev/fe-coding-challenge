const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
const columns = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
const diagonals = [[0, 4, 8], [2, 4, 6]];

const lines = [
  ...rows,
  ...columns,
  ...diagonals
];

export const calculateWinner = (board) => {
  const cells = board.flat();

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }

  return null;
};
