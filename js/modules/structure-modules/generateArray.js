import { arrayTriangle } from "./arrayTriangle.js";
import { arraySquare }   from "./arraySquare.js";
import { arrayHexagon }  from "./arrayHexagon.js";

export async function generateArray( typeBoard, difficulty ){
    let board = {};
    let size = await getSizeRowColumn(difficulty);
    
    if(typeBoard == 'T')
        board = await arrayTriangle(size);
    if(typeBoard == 'S')
        board = await arraySquare(size);
    if(typeBoard == 'H')
        board = await arrayHexagon(size);

    board.type = typeBoard;
    board.diff = difficulty;

    //console.log("Size: " + size + "\nObj: ");
    //console.log(board);
    return board;
}

async function getSizeRowColumn(difficulty){
    if(difficulty == 'E')//Easy
        return 11;
    if(difficulty == 'N')//Normal
        return 15;
    if(difficulty == 'H')//Hard
        return 20;
    if(difficulty == 'I')//Impossible
        return 25;
}