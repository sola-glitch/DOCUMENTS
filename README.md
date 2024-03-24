## Snake (the game itself)

Snake is a game in which a snake needs to explore an environment and catch the fruit without hitting any obstacle or itself. Every time the snake catches a fruit, its size increases.

- [Coding "Snake" in 4 min 30 sec](https://www.youtube.com/watch?v=xGmXxpIj6vs)
- [Mastering the Module Pattern](https://toddmotto.com/mastering-the-module-pattern/) (not really about Snake itself, but a pattern I tried to follow on the project)
Certainly! Here's a simple JavaScript code snippet to get you started on creating a basic Tetris game:

```javascript
const gameBoard = document.getElementById('game-board');
const ROWS = 20;
const COLS = 10;
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

startGame();
```

In this JavaScript code snippet, we have defined functions to draw the game board, clear the board, draw blocks on the board, check for collisions, move blocks down, rotate blocks, update the game state, and start the game. You can further expand and customize these functions to implement the full Tetris game logic.

Remember to link this JavaScript code to your HTML document and add event listeners for user input (e.g., arrow keys) to control block movement and rotation. Additionally, you can enhance the game by adding scoring, levels, and difficulty settings based on player performance.