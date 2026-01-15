
var BOARD_SIZE = 5;
var CELL_COUNT = BOARD_SIZE * BOARD_SIZE;
var RESET_COLOR = 'DodgerBlue';
var MARKED_COLOR = 'rgb(198, 0, 0)';
var BINGO_COLOR = 'rgb(79, 234, 159)';

var num = [];
var union = [];
var numt = [];
var hope = 0;
var tioo = [];
var rowHits = Array(BOARD_SIZE).fill(0);
var colHits = Array(BOARD_SIZE).fill(0);
var diagHits = [0, 0];
var markedCells = Array(CELL_COUNT).fill(false);

function generateUniqueNumbers(count, max) {
  var result = [];
  while (result.length < count) {
    var candidate = Math.floor(Math.random() * max) + 1;
    if (result.indexOf(candidate) === -1) {
      result.push(candidate);
    }
  }
  return result;
}

function setCellColor(index, color) {
  document.getElementById('s' + index + '').style.background = color;
}

function paintRow(rowIndex) {
  var start = rowIndex * BOARD_SIZE;
  for (var col = 0; col < BOARD_SIZE; col++) {
    setCellColor(start + col, BINGO_COLOR);
  }
}

function paintColumn(columnIndex) {
  for (var row = 0; row < BOARD_SIZE; row++) {
    setCellColor(row * BOARD_SIZE + columnIndex, BINGO_COLOR);
  }
}

function paintDiagonalTopLeft() {
  for (var i = 0; i < BOARD_SIZE; i++) {
    setCellColor(i * (BOARD_SIZE + 1), BINGO_COLOR);
  }
}

function paintDiagonalTopRight() {
  for (var i = 1; i <= BOARD_SIZE; i++) {
    setCellColor(i * (BOARD_SIZE - 1), BINGO_COLOR);
  }
}

function resetBoardUI() {
  for (var x = 0; x < CELL_COUNT; x++) {
    setCellColor(x, RESET_COLOR);
  }
  document.getElementById('demo').innerHTML = '';
  document.getElementById('demo1').innerHTML = '';
}

function initializeBoard(values) {
  union = values.slice();
  rowHits = Array(BOARD_SIZE).fill(0);
  colHits = Array(BOARD_SIZE).fill(0);
  diagHits = [0, 0];
  markedCells = Array(CELL_COUNT).fill(false);
  resetDrawOrder();
  resetBoardUI();
}

function resetDrawOrder() {
  hope = 0;
  tioo = generateUniqueNumbers(CELL_COUNT, CELL_COUNT);
}

function hart() {
  numt = generateUniqueNumbers(CELL_COUNT, CELL_COUNT);
  initializeBoard(numt);
  for (var i = 0; i < CELL_COUNT; i++) {
    document.getElementById('test' + i + '').innerHTML = numt[i];
  }
  return union;
}

hart();





function up(){
  var index = union.indexOf(num);
  if (index === -1) {
    return;
  }

  setCellColor(index, MARKED_COLOR);

  if (!markedCells[index]) {
    markedCells[index] = true;
    var rowIndex = Math.floor(index / BOARD_SIZE);
    var columnIndex = index % BOARD_SIZE;
    rowHits[rowIndex]++;
    colHits[columnIndex]++;
    if (rowIndex === columnIndex) {
      diagHits[0]++;
    }
    if (rowIndex + columnIndex === BOARD_SIZE - 1) {
      diagHits[1]++;
    }
  }

  for (var row = 0; row < BOARD_SIZE; row++) {
    if (rowHits[row] === BOARD_SIZE) {
      paintRow(row);
    }
  }
  for (var col = 0; col < BOARD_SIZE; col++) {
    if (colHits[col] === BOARD_SIZE) {
      paintColumn(col);
    }
  }
  if (diagHits[0] === BOARD_SIZE) {
    paintDiagonalTopLeft();
  }
  if (diagHits[1] === BOARD_SIZE) {
    paintDiagonalTopRight();
  }
}

function hty(){
    // num = hope
    num = tioo[hope]
    // console.log(tioo);
    if(hope <= 24){
      hope++
    }
    
    
    return num;
}
function col(){
  for (var x = 0; x < CELL_COUNT; x++) {
    setCellColor(x, RESET_COLOR);
  }
  location.reload()
}
function submit() {
document.getElementById("hhkk").click();
}
