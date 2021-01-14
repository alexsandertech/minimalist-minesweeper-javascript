import { arrayTriangle } from "./arrayTriangle.js";
import { arraySquare }   from "./arraySquare.js";
import { arrayHexagon }  from "./arrayHexagon.js";

export function generateArray( typeBoard, difficulty ){
    let board = {};
    let size = getSizeRowColumn(difficulty);
    
    if(typeBoard == 'T')
        board = arrayTriangle(size);
    if(typeBoard == 'S')
        board = arraySquare(size);
    if(typeBoard == 'H')
        board = arrayHexagon(size);

    board.type = typeBoard;

    //console.log("Size: " + size + "\nObj: ");
    //console.log(board);
    return board;
}

function getSizeRowColumn(difficulty){
    if(difficulty == 'E')//Easy
        return 11;
    if(difficulty == 'N')//Normal
        return 15;
    if(difficulty == 'H')//Hard
        return 20;
    if(difficulty == 'I')//Impossible
        return 25;
}