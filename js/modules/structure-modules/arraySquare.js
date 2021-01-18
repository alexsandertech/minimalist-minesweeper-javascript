export  async  function arraySquare( size ){
    let board = {};

    board.structure = await generateEmptyBoard(size);
    board.totalValidCells = await calcValidCells(size);

    return board;
}

async function generateEmptyBoard(size){    
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

async function calcValidCells(size){
    return (size*size);
}