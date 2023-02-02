// load json
var board = [];
function preload() {
    board = loadJSON("game.json");
}


function setup() {
    createCanvas(512, 512);
}

function draw() {
    background(255);
    // draw the board from json array
    drawBoard();
    drawPieces();
}

function drawBoard() {
    // draw the board from json array
    cellSize = width / 8
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if ((i + j) % 2 == 0) {
                fill(100);
            } else {
                fill(255);
            }
            rect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }
}

function drawPieces() {
    // draw the pieces from json array
    cellSize = width / 8
    for (var i = 0; i < board.board.length; i++) {
        for (var j = 0; j < board.board[i].length; j++) {
            if (board.board[i][j]["currentPiece"] != null) {
                if (board.board[i][j]["currentPiece"]["colour"] == "white") {
                    fill(255);
                } else {
                    fill(0);
                }
                ellipse(i * cellSize + cellSize / 2, j * cellSize + cellSize / 2, cellSize * 0.8, cellSize * 0.8);
                
            }
        }
    }
}
