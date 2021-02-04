import { generateViewBoard } from './generateViewBoard.js';

export async function arrayHexagon( size ){
    let board = {};
    
    board.structure = await generateEmptyBoard(size);
    board.view      = await generateViewBoard(board.structure);
    board.totalValidCells = await calcValidCells(size);

    return board;
}

async function generateEmptyBoard(size){    
    console.log(" >> Generating empty board: Hexagonal Shape");

    let structureMatrizVoid = [];
    let middleRow = (size+1)/2;
    let totalCellsVoidInRow = middleRow-1;
    let totalCellsFilledInRow = middleRow;       

    for(let i = 0; i < middleRow; i++){
        structureMatrizVoid[i] = initRowMatrix(totalCellsFilledInRow, totalCellsVoidInRow);
        totalCellsVoidInRow--;
        totalCellsFilledInRow++;
    }

    totalCellsVoidInRow+=1;
    totalCellsFilledInRow-=1;

    for(let i = middleRow-1; i < size; i++){
        structureMatrizVoid[i] = initRowMatrix(totalCellsFilledInRow, totalCellsVoidInRow);
        totalCellsVoidInRow++;
        totalCellsFilledInRow--;
    } 

    console.log(" << Finished empty board generation");
    return structureMatrizVoid;
}

function initRowMatrix(filledCellsInRow, voidCellsInRow){
    let arr = [];
    let totalCells = filledCellsInRow + voidCellsInRow;

    for(let i = 0; i < totalCells; i++){
        if(i < filledCellsInRow)
            arr[i] = 0;
        else
            arr[i] = null;
    }
    
    return arr;
}

async function calcValidCells(size){
    let middleRow = (size+1)/2;
    let totalCellsFilledInRow = middleRow;       
    let acc = 0;
    
    for(let i = 0; i < middleRow; i++)
        acc = acc + totalCellsFilledInRow + i;

    acc*=2;

    return (acc-size);
}