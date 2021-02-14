const rows = 16;
const cols = 16;
const words = ['Pandaro', 'Panda', 'Leeuw', 'Pinguin', 'Luipaard', 'Bamboebos', 'Iglo', 'Savanne', 'Jungle', 'Wereldreis'];

const matrixX = 250;
const matrixY = 16;
const squareSize = 50;

var matrix = [
    ['A', 'W', 'J', 'V', 'Y', 'D', 'Y', 'O', 'C', 'T', 'S', 'P', 'U', 'R', 'N', 'N'], 
    ['V', 'I', 'I', 'G', 'G', 'H', 'C', 'C', 'R', 'V', 'I', 'F', 'Z', 'W', 'N', 'O'], 
    ['N', 'T', 'C', 'Y', 'Z', 'Q', 'Y', 'A', 'K', 'P', 'E', 'U', 'J', 'S', 'D', 'V'], 
    ['S', 'I', 'G', 'E', 'S', 'F', 'A', 'Ë', 'A', 'U', 'I', 'Y', 'O', 'L', 'L', 'X'],  
    ['I', 'H', 'U', 'E', 'L', 'K', 'A', 'N', 'I', 'D', 'A', 'B', 'T', 'L', 'U', 'E'],  
    ['E', 'G', 'E', 'G', 'D', 'G', 'D', 'M', '-', 'Z', 'E', 'T', 'R', 'E', 'I', 'N'],  
    ['R', 'C', 'J', 'N', 'N', 'A', 'N', 'A', 'I', 'O', 'A', 'Y', 'A', 'E', 'P', 'N'],  
    ['D', 'S', 'A', 'I', 'F', 'I', 'M', 'U', 'B', 'L', 'P', 'J', 'W', 'U', 'A', 'A'],  
    ['L', 'L', 'T', 'H', 'G', 'E', 'P', 'M', 'J', 'F', 'I', 'U', 'Z', 'W', 'A', 'V'],  
    ['E', 'C', 'S', 'C', 'R', 'L', 'A', 'J', 'O', 'F', 'R', 'E', 'C', 'F', 'R', 'A'],  
    ['R', 'R', 'U', 'I', 'P', 'B', 'O', 'Z', 'D', 'U', 'Q', 'R', 'G', 'D', 'D', 'S'],  
    ['E', 'E', 'K', 'K', 'E', 'O', 'B', 'S', 'E', 'E', 'L', 'R', 'O', 'O', 'V', 'S'],  
    ['W', 'A', 'G', 'V', 'O', 'R', 'A', 'D', 'N', 'A', 'P', 'O', 'H', 'L', 'J', 'G'],  
    ['W', 'B', 'D', 'A', 'W', 'S', 'N', 'E', 'W', 'E', 'R', 'O', 'J', 'N', 'Q', 'D'],  
    ['X', 'B', 'V', 'N', 'H', 'H', 'P', 'E', 'O', 'A', 'K', 'I', 'R', 'F', 'A', 'W'],  
    ['Z', 'U', 'I', 'R', 'A', 'C', 'I', 'T', 'C', 'R', 'A', 'T', 'N', 'A', 'C', 'G']
];


var found = [];

var prevCell = null;
var currCell = null;
var currSelection = null;


function enter()
{
    found = [];
}

function loop()
{
    clear();

    displayBackground();
    display();
    checkMouse();

    // text("Prev: " + (prevCell ? prevCell.row + "x" + prevCell.col : "null"), 10, 10);
    // text("Curr: " + (currCell ? currCell.row + "x" + currCell.col : "null"), 10, 30);
}

function displayBackground()
{
    noStroke();
    background(241, 69, 40);
    fill(42, 59, 85);
    circle(-90, 300, 400);
}

function checkMouse()
{
    if (!mouseIsPressed)
    {
        validateSelection();

        prevCell = null;
        currCell = null;
        currSelection = null;
        return;
    }

    if (!prevCell)
        prevCell = findCell(mouseX, mouseY);

    var nextCell = findCell(mouseX, mouseY);

    if (nextCell)
        currCell = nextCell;

    currSelection = findSelection();
}


function validateSelection()
{
    var word = selectedWord();
    if (!word)
        return;

    if (foundWord(word))
        return;

    if (words.includes(word))
        addFound(word, currSelection);

    if (found.length === words.length)
    {
        showScene("Congrats");
    }
}

function findCell(x, y)
{
    var col = Math.floor( (x - matrixX) / squareSize );
    var row = Math.floor( (y - matrixY) / squareSize );

    if (col < 0 || col >= cols || row < 0 || row >= rows )
        return null;

    return { row : row, col : col };
}

function display()
{
    displayMatrix();
    displaySelection();
    displayWords();
}


function displayMatrix()
{
    push();

    textAlign(CENTER, CENTER);

    for(var row = 0; row < matrix.length; row++)
    {
        var arRow = matrix[row];

        for(var col = 0; col < arRow.length; col++)
        {
            var chr = arRow[col];

            var x = matrixX + col * squareSize;
            var y = matrixY + row * squareSize;

            stroke(0);

            var clr = isSelected(row, col) ? "LightBlue" : (foundCell(row, col) ? "Pink" : "White");
            fill( clr );
            rect( x, y, squareSize, squareSize );

            noStroke();
            fill(0);
            text(chr, x + squareSize / 2, y + squareSize / 2);
        }
    }

    pop();
}

function selectedWord()
{
    if (!currSelection)    
        return "";

    var txt = "";    

    for(var o of currSelection)
    {
        txt += o.chr;
    }

    return txt;
}

function displaySelection()
{
    var txt = selectedWord();    
    if (!txt)
        return;

    push();
    noStroke();
    fill(0);
    textSize(20);
    text(txt, matrixX, matrixY + (rows + 1) * squareSize);
    pop();
}


function displayWords()
{
    push();
    noStroke();
    for(var i = 0; i < words.length; i++)
    {
        fill( foundWord(words[i]) ? "Gray" : "White" );
        text(words[i], 30, matrixY + 20 + i * 50);
    }
    pop();
}


function findSelection()
{
    if (!prevCell || !currCell)
        return null;

    // JavaScript feature
    // Execute hSelection() ... and if null execute vSelection(), etc.
    return hSelection() || vSelection() || dSelection();
}

function hSelection()
{
    if (!prevCell || !currCell)
        return null;

    if (prevCell.row != currCell.row)
        return null;

    var ar = [];

    var delta = prevCell.col <= currCell.col ? 1 : -1;

    for(var col = prevCell.col; col != currCell.col + delta; col += delta)
    {
        var row = prevCell.row;
        var chr = matrix[row][col];

        ar.push( { row : row, col : col, chr : chr } );
    }

    return ar;        
}

function vSelection()
{
    if (!prevCell || !currCell)
        return null;

    if (prevCell.col != currCell.col)
        return null;

    var ar = [];

    var delta = prevCell.row <= currCell.row ? 1 : -1;

    for(var row = prevCell.row; row != currCell.row + delta; row += delta)
    {
        var col = prevCell.col;
        var chr = matrix[row][col];

        ar.push( { row : row, col : col, chr : chr } );
    }

    return ar;        
}

function dSelection()
{
    if (!prevCell || !currCell)
        return null;

    if (abs(currCell.row - prevCell.row) != abs(currCell.col - prevCell.col))
        return null;

    var ar = [];

    var dh = prevCell.col <= currCell.col ? 1 : -1;
    var dv = prevCell.row <= currCell.row ? 1 : -1;

    var row = prevCell.row;
    var col = prevCell.col;

    while(row != currCell.row + dv && col != currCell.col + dh)
    {
        var chr = matrix[row][col];
        ar.push( { row : row, col : col, chr : chr } );

        row += dv;
        col += dh;
    }

    return ar;
}

// Returns true if the specified cell is part of the current selection 
function isSelected(row, col)
{
    if (!currSelection)
        return false;

    for(var o of currSelection)
    {
        if (o.row === row && o.col === col)
            return true;
    }

    return false;
}

// Add specified word and list of cells to the found list
function addFound(word, cells)
{
    found.push( { word : word, cells : cells } );
}

// Returns true if the specified word is already found
function foundWord(word)
{
    for(var o of found)
    {
        if (o.word === word)
            return true;
    }

    return false;
}

// Returns true if the specified cell is part of an word already found
function foundCell(row, col)
{
    for(var o of found)
    {
        for(var oCell of o.cells)
        {
            if (oCell.row === row && oCell.col === col)
                return true;
        }
    }

    return false;
}