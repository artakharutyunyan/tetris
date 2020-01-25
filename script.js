const row = 20;
const col = 10;
const vacant = 0;

let board = [];

function initBoard() {
  for (let r = 0; r < row; r++) {
    board[r] = [];
    for (let c = 0; c < col; c++) {
      board[r][c] = Math.round(Math.random());
    }
  }
}

initBoard();

function updateBoard(board) {
  const tetris = document.getElementById("tetris");
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      const cell = tetris.querySelector(`.cell-${r}-${c}`);
      if (board[r][c] === 0) {
        cell.classList.remove("fill");
      } else {
        cell.classList.add("fill");
      }
    }
  }
}

function createBoard() {
  const tetris = document.getElementById("tetris");
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      let div = document.createElement("div");
      div.className = `cell cell-${r}-${c}`;
      tetris.appendChild(div);
    }
  }
}
createBoard();
updateBoard(board);
