import { generateArray } from './structure-modules/generateArray.js';
import { generateBombs } from './structure-modules/generateBombs.js';

export function inicializeBoard(typeBoard, difficulty){
    console.log("> Initializing: Generate Board");
    
    let board = generateArray(typeBoard, difficulty);
        board = generateBombs(board);
      //board.structure = generateNumbers(board);

    //options.


    console.log("> Finalizing Generate Board");
}

/*
  Lembrete
    typeBoard  // H: Hexagon   | T: Triagle     | S: Square 
    difficulty // E: Easy Mode | N: Normal Mode | H: Hard Mode | I:Impossible Mode
*/