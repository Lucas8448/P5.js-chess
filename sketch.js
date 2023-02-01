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

// store the movement directions possible
// value 1 of move is x, value 2 of move is y, value 3 is when the move is possible so a value of 0 is whenever, a value of 1 is when a piece has to be in the target spot and a value of 2 is when it is the pieces first move
// p/P is pawn, r/R is rook, b/B is Bishop,  n/N is knight, q/Q is queen, k/K is king
p = [
    [0, 1, 0],
    [0, 2, 2],
    [1, 1, 1],
    [-1, 1, 1]
];

r = [
    [0, 1, 0],
    [0, 2, 0],
    [0, 3, 0],
    [0, 4, 0],
    [0, 5, 0],
    [0, 6, 0],
    [0, 7, 0],
    [1, 0, 0],
    [2, 0, 0],
    [3, 0, 0],
    [4, 0, 0],
    [5, 0, 0],
    [6, 0, 0],
    [7, 0, 0],
    [-1, 0, 0],
    [-2, 0, 0],
    [-3, 0, 0],
    [-4, 0, 0],
    [-5, 0, 0],
    [-6, 0, 0],
    [-7, 0, 0]
];

b = [
    [1, 1, 0],
    [2, 2, 0],
    [3, 3, 0],
    [4, 4, 0],
    [5, 5, 0],
    [6, 6, 0],
    [7, 7, 0],
    [-1, 1, 0],
    [-2, 2, 0],
    [-3, 3, 0],
    [-4, 4, 0],
    [-5, 5, 0],
    [-6, 6, 0],
    [-7, 7, 0],
    [1, -1, 0],
    [2, -2, 0],
    [3, -3, 0],
    [4, -4, 0],
    [5, -5, 0],
    [6, -6, 0],
    [7, -7, 0],
    [-1, -1, 0],
    [-2, -2, 0],
    [-3, -3, 0],
    [-4, -4, 0],
    [-5, -5, 0],
    [-6, -6, 0],
    [-7, -7, 0]
];

n = [
    [1, 2, 0],
    [2, 1, 0],
    [-1, 2, 0],
    [-2, 1, 0],
    [1, -2, 0],
    [2, -1, 0],
    [-1, -2, 0],
    [-2, -1, 0]
];

q = [
    [0, 1, 0],
    [0, 2, 0],
    [0, 3, 0],
    [0, 4, 0],
    [0, 5, 0],
    [0, 6, 0],
    [0, 7, 0],
    [1, 0, 0],
    [2, 0, 0],
    [3, 0, 0],
    [4, 0, 0],
    [5, 0, 0],
    [6, 0, 0],
    [7, 0, 0],
    [-1, 0, 0],
    [-2, 0, 0],
    [-3, 0, 0],
    [-4, 0, 0],
    [-5, 0, 0],
    [-6, 0, 0],
    [-7, 0, 0],
    [1, 1, 0],
    [2, 2, 0],
    [3, 3, 0],
    [4, 4, 0],
    [5, 5, 0],
    [6, 6, 0],
    [7, 7, 0],
    [-1, 1, 0],
    [-2, 2, 0],
    [-3, 3, 0],
    [-4, 4, 0],
    [-5, 5, 0],
    [-6, 6, 0],
    [-7, 7, 0],
    [1, -1, 0],
    [2, -2, 0],
    [3, -3, 0],
    [4, -4, 0],
    [5, -5, 0],
    [6, -6, 0],
    [7, -7, 0],
    [-1, -1, 0],
    [-2, -2, 0],
    [-3, -3, 0],
    [-4, -4, 0],
    [-5, -5, 0],
    [-6, -6, 0],
    [-7, -7, 0]
];

P = [
    [0, -1, 0],
    [0, -2, 2],
    [1, -1, 1],
    [-1,-1, 1]
];

R = [
    [0, 1, 0],
    [0, 2, 0],
    [0, 3, 0],
    [0, 4, 0],
    [0, 5, 0],
    [0, 6, 0],
    [0, 7, 0],
    [1, 0, 0],
    [2, 0, 0],
    [3, 0, 0],
    [4, 0, 0],
    [5, 0, 0],
    [6, 0, 0],
    [7, 0, 0],
    [-1, 0, 0],
    [-2, 0, 0],
    [-3, 0, 0],
    [-4, 0, 0],
    [-5, 0, 0],
    [-6, 0, 0],
    [-7, 0, 0],
    [0, -1, 0],
    [0, -2, 0],
    [0, -3, 0],
    [0, -4, 0],
    [0, -5, 0],
    [0, -6, 0],
    [0, -7, 0],
];

B = [
    [1, 1, 0],
    [2, 2, 0],
    [3, 3, 0],
    [4, 4, 0],
    [5, 5, 0],
    [6, 6, 0],
    [7, 7, 0],
    [-1, 1, 0],
    [-2, 2, 0],
    [-3, 3, 0],
    [-4, 4, 0],
    [-5, 5, 0],
    [-6, 6, 0],
    [-7, 7, 0],
    [1, -1, 0],
    [2, -2, 0],
    [3, -3, 0],
    [4, -4, 0],
    [5, -5, 0],
    [6, -6, 0],
    [7, -7, 0],
    [-1, -1, 0],
    [-2, -2, 0],
    [-3, -3, 0],
    [-4, -4, 0],
    [-5, -5, 0],
    [-6, -6, 0],
    [-7, -7, 0]
];

N = [
    [1, 2, 0],
    [2, 1, 0],
    [-1, 2, 0],
    [-2, 1, 0],
    [1, -2, 0],
    [2, -1, 0],
    [-1, -2, 0],
    [-2, -1, 0]
];

Q = [
    [0, 1, 0],
    [0, 2, 0],
    [0, 3, 0],
    [0, 4, 0],
    [0, 5, 0],
    [0, 6, 0],
    [0, 7, 0],
    [1, 0, 0],
    [2, 0, 0],
    [3, 0, 0],
    [4, 0, 0],
    [5, 0, 0],
    [6, 0, 0],
    [7, 0, 0],
    [-1, 0, 0],
    [-2, 0, 0],
    [-3, 0, 0],
    [-4, 0, 0],
    [-5, 0, 0],
    [-6, 0, 0],
    [-7, 0, 0],
    [1, 1, 0],
    [2, 2, 0],
    [3, 3, 0],
    [4, 4, 0],
    [5, 5, 0],
    [6, 6, 0],
    [7, 7, 0],
    [-1, 1, 0],
    [-2, 2, 0],
    [-3, 3, 0],
    [-4, 4, 0],
    [-5, 5, 0],
    [-6, 6, 0],
    [-7, 7, 0],
    [1, -1, 0],
    [2, -2, 0],
    [3, -3, 0],
    [4, -4, 0],
    [5, -5, 0],
    [6, -6, 0],
    [7, -7, 0],
    [-1, -1, 0],
    [-2, -2, 0],
    [-3, -3, 0],
    [-4, -4, 0],
    [-5, -5, 0],
    [-6, -6, 0],
    [-7, -7, 0]
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
    moveSelected();
    highlight();
    previewMoves();
    drawPieces();
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
    // draw pieces according to the pieces variable
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

function previewMoves() {
    // use the p/P, r/R, b/B,  n/N, q/Q, k/K to show a preview of where the piece is allowed to move
    if (selectedPiece != null) {
        if (selectType(selectedPiece) === "p") {
            // show preview of p
            var moves = p
            console.log(moves)
            // loop through all possible moves
            for (var i = 0; i < moves.length; i++) {
                // check if the move is valid
                coords = [moves[i][0], moves[i][1]]
                console.log(coords)
                if (moves[i][2] == 1) {
                    console.log("Normal move")
                    // check if the move is blocked
                    if (pieces[moves[i][1]][moves[i][0]] === ' ') {
                        fill(0, 255, 0, 100);
                        rect(moves[i][0] * width / 8, moves[i][1] * width / 8, width / 8, width / 8);
                    }
                } else if (moves[i][2] == 2 && BlackFirstMove(coords)) {
                    console.log("First move")
                    // check if the move is blocked
                    if (pieces[moves[i][1]][moves[i][0]] === ' ') {
                        fill(0, 255, 0, 100);
                        rect(moves[i][0] * width / 8, moves[i][1] * width / 8, width / 8, width / 8);
                    }
                } else if (moves[i][2] == 3) {
                    console.log("Capture")
                    // check if there is an enemy in the square
                    if (isBlack(coords)) {
                        fill(255, 0, 0, 100);
                        rect(moves[i][0] * width / 8, moves[i][1] * width / 8, width / 8, width / 8);
                    }
                }
            }
        }
    }
}

function selectType(selectedPiece) {
    // get the piece type at selectedPiece
    return pieces[selectedPiece[1]][selectedPiece[0]];
}

function isBlack(coords) {
    // check if the piece at coords is white
    if (pieces[coords[1]][coords[0]] === pieces[coords[1]][coords[0]].toUpperCase()) {
        return true;
    } else {
        return false;
    }
}

function isWhite(coords) {
    // check if the piece at coords is black
    if (pieces[coords[1]][coords[0]] === pieces[coords[1]][coords[0]].toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

function BlackFirstMove(coords) {
    // check if the piece at coords is black and has not moved yet
    if (isBlack(coords) && coords[1] === 6) {
        return true;
    } else {
        return false;
    }
}

function WhiteFirstMove(coords) {
    // check if the piece at coords is white and has not moved yet
    if (isWhite(coords) && coords[1] === 1) {
        return true;
    } else {
        return false;
    }
}