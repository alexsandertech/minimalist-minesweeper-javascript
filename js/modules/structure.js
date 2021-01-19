import { generateArray }   from './structure-modules/generateArray.js';
import { generateBombs }   from './structure-modules/generateBombs.js';
import { generateNumbers } from './structure-modules/genarateNumbers.js';

export async function inicializeBoard(typeBoard, difficulty){
    console.log("> Initializing: Generate Board");
    
    let board = await generateArray(typeBoard, difficulty);
        board = await generateBombs(board);
        board.structure = await generateNumbers(board.structure, board.typeBoard);

    console.log("< Finalizing: Generate Board");
    return board;
}