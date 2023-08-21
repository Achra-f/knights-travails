import './style.css';

console.log('hell is low');

// 2D array for chessboard
const chessboard = [];
for (let row = 0; row < 8; row++) {
  const rowArray = [];
  for (let col = 0; col < 8; col++) {
    rowArray.push(0);
  }
  chessboard.push(rowArray);
}

// get chessboard html element
const chessboardEl = document.getElementById('chessboard');

function createChessboard() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
      square.className = 'square';
      square.textContent = `${row},${col}`;
      chessboardEl.appendChild(square);
    }
  }
}

// place the knight
function placeKnight(row, col) {
  const knightPosition = row * 8 + col;
  const squares = document.querySelectorAll('.square');
  squares[knightPosition].classList.add('knight');
}
createChessboard();
placeKnight(0, 0);
