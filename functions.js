const gameBoard = document.getElementById('game-board');
const ROWS = 20;
const 10;
const EMPTY = 'white';
let board = Array.from({ length: ROWS }, () => Array(COLS).fill(EMPTY));

function drawBoard() {
    gameBoard.innerHTML = '';
    board.forEach(row => {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        row.forEach(cell => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.style.backgroundColor = cell;
            rowElement.appendChild(cellElement);
        });
        gameBoard.appendChild(rowElement);
    });
}

function clearBoard() {
    board = Array.from({ length: ROWS }, () => Array(COLS).fill(EMPTY));
    drawBoard();
}

function drawBlock(x, y, color) {
    board[y][x] = color;
}

function checkCollision(x, y) {
    return x < 0 || x >= COLS || y >= ROWS || board[y][x] !== EMPTY;
}

function moveBlockDown() {
    // Implement block movement logic here
}

function rotateBlock() {
    // Implement block rotation logic here
}

function updateGame() {
    // Implement game update logic here
}

function startGame() {
    // Implement game initialization logic here

}

// Add event listeners for user input (e.g., arrow keys) to control block movement and rotation

startGame(){
 alert("hello,world| this is a essage")
}