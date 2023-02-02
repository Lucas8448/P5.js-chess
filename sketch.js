// load json
var board = [];
function preload() {
    board = loadJSON("game.json");
}

// variables
var cellSize;
var selectedPiece;

function setup() {
    createCanvas(512, 512);
}

function draw() {
    background(255);
    // draw the board from json array
    drawBoard();
    drawPieces();
    selectPiece();
}

function drawBoard() {
    // draw the board from json array
    cellSize = width / 8
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if ((i + j) % 2 == 0) {
                fill("#333333");
            } else {
                fill("#C5C6D0");
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
            if (board.board[j][i]["currentPiece"] != null) {
                if (board.board[j][i]["currentPiece"]["type"] == "p") {
                    drawPawn(i, j, board.board[j][i]["currentPiece"]["colour"]);
                }
                
            }
        }
    }
}

function selectPiece() {
    // select a piece
    cellSize = width / 8
    if (mouseIsPressed) {
        selectedPiece = board.board[floor(mouseY / cellSize)][floor(mouseX / cellSize)]["currentPiece"];
    }
    highlightSquare(floor(mouseX / cellSize), floor(mouseY / cellSize), "blue");
}

function highlightSquare(squareX, squareY, colour) {
    // highlight a square
    cellSize = width / 8
    fill(0, 0, 255, 100);
    rect(squareX * cellSize, squareY * cellSize, cellSize, cellSize);
}

function drawPawn(cellX, cellY, colour) {
    // draw a pawn where the outline only outlines the edges of the final product
    cellSize = width / 8
    noStroke()
    if (colour == "white") {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(cellX * cellSize + cellSize / 2, cellY * cellSize + cellSize / 2.5, cellSize * 0.3, cellSize * 0.3);
    ellipse(cellX * cellSize + cellSize / 2, cellY * cellSize + cellSize / 1.7, cellSize * 0.35, cellSize * 0.35);
    arc(cellX * cellSize + cellSize / 2, cellY * cellSize + cellSize / 1.16, cellSize * 0.43, cellSize * 0.44, 3.14159, 0);
    if (colour == "white") {
        fill(255);
    } else {
        fill(0);
    }
    ellipse(cellX * cellSize + cellSize / 2, cellY * cellSize + cellSize / 2.5, cellSize * 0.25, cellSize * 0.25);
    ellipse(cellX * cellSize + cellSize / 2, cellY * cellSize + cellSize / 1.7, cellSize * 0.3, cellSize * 0.3);
    arc(cellX * cellSize + cellSize / 2, cellY * cellSize + cellSize / 1.2, cellSize * 0.35, cellSize * 0.35, 3.14159, 0);
}