// create 2d array with values from a1 to h8
var board = [
    ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'],
    ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'],
    ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
    ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8'],
    ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8'],
    ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'],
    ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8'],
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8']
];

// create 2d array pieces
var pieces = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

// create an array for each of the peices showing what pattern the can move in
// 15x15 array for each piece
// 0 = can't move there
// 1 = can move there
// 2 = can move there only if enemy piece is there
// 3 = can only move there on first move
// the peice is at 8x8 as 
// p/P is pawn, r/R is rook, b/B is Bishop,  n/N is knight
var P = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var p = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var R = [
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
];

var r = [
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
];

var N = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var n = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];


// create a variable to store the selected piece
var selectedPiece = null;

// define cellsize
var cellSize = 64;

function setup() {
    createCanvas(512, 512);
}

function draw() {
    frameRate(10);
    drawBoard();
    noStroke();
    smooth();
    drawPieces();
    moveSelected();
    highlight();
}

function drawBoard() {
    var cellSize = width / 8;
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
    var cellSize = width / 8;
    // draw peices according to the peices variable
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if (pieces[j][i] != ' ') {
                // create unique figure for each of the pieces in their respective colours
                if (pieces[j][i] == 'p') {
                    stroke(255)
                    fill(0);
                    ellipse(i * cellSize + cellSize / 2, j * cellSize + cellSize / 2, cellSize / 2, cellSize / 2);
                }
                if (pieces[j][i] == 'P') {
                    stroke(0)
                    fill(255);
                    ellipse(i * cellSize + cellSize / 2, j * cellSize + cellSize / 2, cellSize / 2, cellSize / 2);
                }
                if (pieces[j][i] == 'r') {
                    stroke(255)
                    fill(0);
                    rect(i * cellSize + cellSize / 4, j * cellSize + cellSize / 4, cellSize / 2, cellSize / 2);
                }
                if (pieces[j][i] == 'R') {
                    stroke(0)
                    fill(255);
                    rect(i * cellSize + cellSize / 4, j * cellSize + cellSize / 4, cellSize / 2, cellSize / 2);
                }
                if (pieces[j][i] == 'n') {
                    stroke(255)
                    fill(0);
                    triangle(i * cellSize + cellSize / 4, j * cellSize + cellSize / 4, i * cellSize + cellSize / 4, j * cellSize + cellSize / 4 + cellSize / 2, i * cellSize + cellSize / 4 + cellSize / 2, j * cellSize + cellSize / 4 + cellSize / 4);
                }
                if (pieces[j][i] == 'N') {
                    stroke(0)
                    fill(255);
                    triangle(i * cellSize + cellSize / 4, j * cellSize + cellSize / 4, i * cellSize + cellSize / 4, j * cellSize + cellSize / 4 + cellSize / 2, i * cellSize + cellSize / 4 + cellSize / 2, j * cellSize + cellSize / 4 + cellSize / 4);
                }
                if (pieces[j][i] == 'b') {
                    stroke(255)
                    fill(0);
                    ellipse(i * cellSize + cellSize / 2, j * cellSize + cellSize / 2, cellSize / 2, cellSize / 2);
                    ellipse(i * cellSize + cellSize / 2, j * cellSize + cellSize / 2, cellSize / 4, cellSize / 4);
                }
                if (pieces[j][i] == 'B') {
                    stroke(0)
                    fill(255);
                    ellipse(i * cellSize + cellSize / 2, j * cellSize + cellSize / 2, cellSize / 2, cellSize / 2);
                    ellipse(i * cellSize + cellSize / 2, j * cellSize + cellSize / 2, cellSize / 4, cellSize / 4);
                }
                if (pieces[j][i] == 'q') {
                    stroke(255)
                    fill(0);
                    ellipse(i * cellSize + cellSize / 2, j * cellSize + cellSize / 2, cellSize / 2, cellSize / 2);
                    rect(i * cellSize + cellSize / 4, j * cellSize + cellSize / 4, cellSize / 2, cellSize / 2);
                }
                if (pieces[j][i] == 'Q') {
                    stroke(0)
                    fill(255);
                    ellipse(i * cellSize + cellSize / 2, j * cellSize + cellSize / 2, cellSize / 2, cellSize / 2);
                    rect(i * cellSize + cellSize / 4, j * cellSize + cellSize / 4, cellSize / 2, cellSize / 2);
                }
                if (pieces[j][i] == 'k') {
                    stroke(255)
                    fill(0);
                    ellipse(i * cellSize + cellSize / 2, j * cellSize + cellSize / 2, cellSize / 2, cellSize / 2);
                    triangle(i * cellSize + cellSize / 4, j * cellSize + cellSize / 4, i * cellSize + cellSize / 4, j * cellSize + cellSize / 4 + cellSize / 2, i * cellSize + cellSize / 4 + cellSize / 2, j * cellSize + cellSize / 4 + cellSize / 4);
                }
                if (pieces[j][i] == 'K') {
                    stroke(0)
                    fill(255);
                    ellipse(i * cellSize + cellSize / 2, j * cellSize + cellSize / 2, cellSize / 2, cellSize / 2);
                    triangle(i * cellSize + cellSize / 4, j * cellSize + cellSize / 4, i * cellSize + cellSize / 4, j * cellSize + cellSize / 4 + cellSize / 2, i * cellSize + cellSize / 4 + cellSize / 2, j * cellSize + cellSize / 4 + cellSize / 4);
                }
            }
        }
    }
}

function highlight() {
    // set selected piece if mouse presses it
    if (mouseIsPressed) {
        if (mouseButton === LEFT && (mouseX <= width && mouseX >= 0) && (mouseY <= height && mouseY >= 0)) {
            var cellSize = width / 8;
            var x = floor(mouseX / cellSize);
            var y = floor(mouseY / cellSize);
            if (pieces[y][x] != ' ') {
                selectedPiece = [x, y];
            }
        } else if (mouseButton === RIGHT) {
            selectedPiece = null;
        }
    }
    // highlight selected piece
    if (selectedPiece != null) {
        fill(255, 255, 0, 100);
        rect(selectedPiece[0] * width / 8, selectedPiece[1] * width / 8, width / 8, width / 8);
    }
}

function moveSelected() {
    // move selected piece to mouse location
    if (mouseIsPressed) {
        if (mouseButton === LEFT) {
            var cellSize = width / 8;
            var x = floor(mouseX / cellSize);
            var y = floor(mouseY / cellSize);
            if (selectedPiece != null) {
                piece = pieces[selectedPiece[1]][selectedPiece[0]];
                pieces[selectedPiece[1]][selectedPiece[0]] = ' ';
                pieces[y][x] = piece
            }
        }
    }
}