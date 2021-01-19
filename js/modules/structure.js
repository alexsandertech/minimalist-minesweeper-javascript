import { generateArray } from './structure-modules/generateArray.js';
import { generateBombs } from './structure-modules/generateBombs.js';

export async function inicializeBoard(typeBoard, difficulty){
    console.log("> Initializing: Generate Board");
    
    let board = await generateArray(typeBoard, difficulty);
        board = await generateBombs(board);
        //board.structure = generateNumbers(board.structure. board.typeBoard)
        //console.log(board);;

    console.log("< Finalizing: Generate Board");
}