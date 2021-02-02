import { arrayTriangle } from "./arrayTriangle.js";
import { arraySquare }   from "./arraySquare.js";
import { arrayHexagon }  from "./arrayHexagon.js";

export async function generateArray( typeB, diff ){
    let board = {};
    let size = await getSizeRowColumn(diff);
    
    if(typeB == 'T')
        board = await arrayTriangle(size);
    if(typeB == 'S')
        board = await arraySquare(size);
    if(typeB == 'H')
        board = await arrayHexagon(size);

    if(typeB == 'T')
        board.row = Math.trunc(size/2)+1;
    else
        board.row = size;        
    board.column    = size;
    board.typeBoard = typeB;
    board.difficulty = diff;

    return board;
}

async function getSizeRowColumn(difficulty){
    if(difficulty == 'E')//Easy
        return 7;
    if(difficulty == 'N')//Normal
        return 9;
    if(difficulty == 'H')//Hard
        return 15;
    if(difficulty == 'I')//Impossible
        return 17;
}