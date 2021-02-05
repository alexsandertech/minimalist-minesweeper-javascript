import { addListenerClickLEFT } from "../general-modules/listenerClick.js";
import { addListenerClickRIGHT } from "../general-modules/listenerClick.js";
import { removeListenerClickLEFT } from "../general-modules/listenerClick.js";
import { removeListenerClickRIGHT } from "../general-modules/listenerClick.js";

export async function addListenerButtons(board) {
    console.log(" >> Inicializing addListenerClick");
     
    addListenerClickLEFT(".btn-back");
    addListenerClickLEFT(".btn-restart");
    await addListenerCells(board.column, board.row, board.view);

    console.log(" << Finalizing addListenerClick");
}

export async function removeListenerButtons(board) {
    console.log(" >> Inicializing listenerButtons");
     
    removeListenerClickLEFT(".btn-back");
    removeListenerClickLEFT(".btn-restart");
    await removeListenerCells(board.column, board.row, board.view);

    console.log(" << Finalizing listenerButtons");
}

async function addListenerCells(column, row, view){
    for(let i=0; i<row; i++)
        for(let j=0; j<column; j++)
            if(view[i][j]!=null) {
                addListenerClickLEFT(".cell-"+i+"-"+j);
                addListenerClickRIGHT(".cell-"+i+"-"+j);
            }
}

async function removeListenerCells(column, row, view){
    for(let i=0; i<row; i++)
        for(let j=0; j<column; j++)
            if(view[i][j]!=null) {
                removeListenerClickLEFT(".cell-"+i+"-"+j);
                removeListenerClickRIGHT(".cell-"+i+"-"+j);
            }
}