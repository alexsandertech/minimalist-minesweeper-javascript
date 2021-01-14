export function arraySquare( size ){
    let board = {};

    board.structure = generateEmptyBoard(size);
    board.totalValidCells = calcValidCells(size);

    return board;
}

function generateEmptyBoard(size){    
    console.log(" >> Generating empty board: Square Shape");
    let structureArrVoid = [];

    for(let i = 0; i < size; i++){
        structureArrVoid[i] = initRowMatrix(size);
    }
    console.log(" >> Finished empty board generation");
    return structureArrVoid;
}

function initRowMatrix(size){
    let auxArrRow = [];
    for(let i = 0; i < size; i++){
        auxArrRow[i] = 0;
    }
    return auxArrRow;
}

function calcValidCells(size){
    return (size*size);
}