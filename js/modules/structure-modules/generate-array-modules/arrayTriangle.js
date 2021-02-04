import { generateViewBoard } from './generateViewBoard.js';

export  async  function arrayTriangle( size ){
    let board = {};

    board.structure = await generateEmptyBoard(size);
    board.view      = await generateViewBoard(board.structure);
    board.totalValidCells = await calcValidCells(size);

    return board;
}

async function generateEmptyBoard(size){    
    console.log(" >> Generating empty board: Triangular Shape");
    let structureMatrizVoid = [];
    let calcRows = Math.trunc(size/2);
    let totalCellsVoidInRow = calcRows;
    let totalCellsFilledInRow = 1;       
    
    for(let i = 0; i <= calcRows; i++){
        structureMatrizVoid[i] = initRowMatrix(totalCellsFilledInRow, totalCellsVoidInRow);
        totalCellsFilledInRow += 2;
        totalCellsVoidInRow -= 1;
    }
    console.log(" << Finished empty board generation");
    return structureMatrizVoid;
}

function initRowMatrix(filledCellsInRow, voidCellsInRow){
    let arr = [];
    let auxVoid = voidCellsInRow + filledCellsInRow;
    let totalCells = filledCellsInRow + voidCellsInRow*2;

    for(let i = 0; i < totalCells; i++){
        if(i >= voidCellsInRow && i < auxVoid)
            arr[i] = 0;
        else
            arr[i] = null;
    }
    
    return arr;
}

async function calcValidCells(size){
    let calcRows = Math.trunc(size/2)+1;
    let totalCellsFilledInRow = 1;      
    let acc = 0;
    
    for(let i = 0; i < calcRows; i++){
        acc += totalCellsFilledInRow;
        totalCellsFilledInRow += 2;
    }

    return acc;
}

