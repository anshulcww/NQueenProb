var express = require('express')
var app = express()


// class User{
//     constructor(row,col){
//         this.row = row;
//         this.col = col;
//     }
// }
// var user = new User()
// console.log(user);


// var array = new Array(4)
// for(var i = 0; i<array.length; i++){
//      array[i] = [];
//      for(var j= 0; j<array.length; j++){
//          array[i][j] = 0

//          console.log(array )
//      }

// } 



function generateBoard(n) {
    var board = [];
    for (var i = 0; i < n; i = i + 1) {
        board[i] = Array(n).fill(0);
    }
    return board;
}
function isSafe(board, row, col) {
    var l = board.length;
    // check ^ direction
    for (var i = row; i >= 0; i = i - 1) {
        if (board[i][col] === 1) {
            return false;
        }
    }
    // check left diagonals
    for (var i = row, j = col; i >= 0 && j >= 0; i = i - 1, j = j - 1) {
        if (board[i][j] === 1) {
            return false;
        }
    }
    // check right diagonals
    for (var i = row, j = col; i >= 0 && j < l; i = i - 1, j = j + 1) {
        if (board[i][j] === 1) {
            return false;
        }
    }
    return true;
}
function solveNQueensRec(board, row, n) {
    if (row === n) {
        return true;
    }
    var l = board.length;
    for (var i = 0; i < l; i = i + 1) {
        if (isSafe(board, row, i)) {
            board[row][i] = 1;
            if (solveNQueensRec(board, row + 1, n)) {
                return true;
            }
            board[row][i] = 0;
        }
    }
    return false;
}
function solveNQueens(n) {
    var board = generateBoard(n);
    if (solveNQueensRec(board, 0, n)) {
        console.log(board.map(function (row) { return row.join(' '); }).join('\n'))
        return board.map(function (row) { return row.join(' '); }).join('\n');
    }
    return 'Not possible';
}
solveNQueens(4);




app.listen(3000);