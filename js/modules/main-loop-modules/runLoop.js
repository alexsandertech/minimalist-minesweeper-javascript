import { renderTime }  from "./renderMain.js";
import { setStyleFillCell } from './renderMain.js';
import { allowIncrement }    from './../structure-modules/genarateNumbers.js';

var time = 0;
var statusBack      = false;
var statusRestart   = false;
var statusVictory   = false;
var statusDefeat    = false;
var boardCopy       = {};

export async function runLoop(board){
    console.log(" >> Initializing runLoop");

    setInterval(renderIncTimer, 1000);
    let result    = [false, null];
        boardCopy = board;

    do {
        await sleep(500);
        result = actionRun(board);
    } while(!result[0]);

    result[2] = time;
    
    console.log(result);
    console.log(" >> Finalizing runLoop");
    return result;
}

function renderIncTimer(){
    time++;
    renderTime(time);
}

function actionRun(){
    let result = [false, -1];

    if(getValueBack())
        result = [true, "btnBack"];        
    else if(getValueRestart())
        result = [true, "btnRestart"];
    else if(getValueDefeat())
        result = [true, "defeat"];
    else if(getValueVictory())
        result = [true, "victory"];
    
    return result;
}

export function setBack(){
    statusBack = true;
}

function getValueBack(){
    return statusBack;
}

export function setRestart(){
    statusRestart = true;
}

function getValueRestart(){
    return statusRestart;
}

export function setVictory(){
    statusVictory = true;
}

function getValueVictory(){
    return statusVictory;
}

export function setDefeat(){
    statusDefeat = true;
}

function getValueDefeat(){
    return statusDefeat;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function revealCell(i, j){
    let theme = window.getComputedStyle(document.body).getPropertyValue('--bg-box-color')=='#212325'? "DARK" : "LIGHT";
    let typeB = getTypeBoardStr(boardCopy.typeBoard, i, j, boardCopy.row, boardCopy.column);
   
    if(boardCopy.view[i][j]=='*'){
        boardCopy.view[i][j] = boardCopy.structure[i][j];

        setStyleFillCell(i, j, theme, boardCopy.view[i][j], "cell" + typeB);

        if(validCellVoid(boardCopy.view[i][j]))
            neighbors(i, j, boardCopy.typeBoard, boardCopy.row, boardCopy.column);
    }
}

function getTypeBoardStr(typeBoard, i, j, row, column){
    if(typeBoard == 'H')
        return "Hexagon";
    if(typeBoard == 'S')
        return "Square";
    if(typeBoard == 'T')
        if((row + column)%2==1)
            if((j+i)%2==1)
                return "Triangle";
            else 
                return "TriangleI";
        else
            if((j+i)%2==1)
                return "TriangleI";
            else
                return "Triangle";
}

function validCellVoid(c){
    return (c=='0')?true:false;
}

function neighbors(i, j, typeBoard, limI, limJ){
    if(typeBoard=='S' || typeBoard=='T'){        
        if(allowIncrement(i-1, j-1, limI, limJ, boardCopy.view))
            revealCell(i-1, j-1);
        if(allowIncrement(i-1, j, limI, limJ, boardCopy.view))
            revealCell(i-1, j);
        if(allowIncrement(i-1, j+1, limI, limJ, boardCopy.view))
            revealCell(i-1, j+1);
        
        if(allowIncrement(i, j-1, limI, limJ, boardCopy.view))
            revealCell(i, j-1);
        if(allowIncrement(i, j+1, limI, limJ, boardCopy.view))
            revealCell(i, j+1);
        
        if(allowIncrement(i+1, j-1, limI, limJ, boardCopy.view))
            revealCell(i+1, j-1);
        if(allowIncrement(i+1, j, limI, limJ, boardCopy.view))
            revealCell(i+1, j);
        if(allowIncrement(i+1, j+1, limI, limJ, boardCopy.view))
            revealCell(i+1, j+1);
    }
    //allowIncrement(i, j, limI, limJ, board)
}

/*
function getNeighbor(i, j, typeBoard, limI, limJ){
    let coord =[[]];
    let cont = -1;
    if(typeBoard=='S' || typeBoard=='T'){        
        if(allowIncrement(i-1, j-1, limI, limJ, boardCopy.view))
            coord[++cont] = [i-1, j-1];
        if(allowIncrement(i-1, j, limI, limJ, boardCopy.view))
            coord[++cont] = [i-1, j];
        if(allowIncrement(i-1, j+1, limI, limJ, boardCopy.view))
            coord[++cont] = [i-1, j+1];
        
        if(allowIncrement(i, j-1, limI, limJ, boardCopy.view))
            coord[++cont] = [i, j-1];
        if(allowIncrement(i, j+1, limI, limJ, boardCopy.view))
            coord[++cont] = [i, j+1];
        
        if(allowIncrement(i+1, j-1, limI, limJ, boardCopy.view))
            coord[++cont] = [i+1, j-1];
        if(allowIncrement(i+1, j, limI, limJ, boardCopy.view))
            coord[++cont] = [i+1, j];
        if(allowIncrement(i+1, j+1, limI, limJ, boardCopy.view))
            coord[++cont] = [i+1, j+1];
    }
    return coord;
    //allowIncrement(i, j, limI, limJ, board)
}*/