import { renderTime }  from "./renderMain.js";
import { setStyleFillCell } from './renderMain.js';
import { allowIncrement }    from './../structure-modules/genarateNumbers.js';

var time = 0;
var statusBack      = false;
var statusRestart   = false;
var statusVictory   = false;
var statusDefeat    = false;
var contCellReveal  = 0;
var boardCopy       = {};

export async function runLoop(board){
    console.log(" >> Initializing runLoop");
    resetAllGlobalVariables();

    var t = setInterval(renderIncTimer, 1000);
    let result    = [false, null, null];
        boardCopy = board;
    
    do {
        await sleep(500);
        result = actionRun(board);
    } while(!result[0]);
    
    result[2] = time;
    clearInterval(t);
    
    console.log(" >> Finalizing runLoop");
    return result;
}

function resetAllGlobalVariables(){
    time = 0;
    statusBack      = false;
    statusRestart   = false;
    statusVictory   = false;
    statusDefeat    = false;
    contCellReveal  = 0;
    boardCopy       = {};    
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

export async function flagCell(i, j){
    let theme = window.getComputedStyle(document.body).getPropertyValue('--bg-box-color')=='#212325'? "DARK" : "LIGHT";
    let typeB = getTypeBoardStr(boardCopy.typeBoard, i, j, boardCopy.row, boardCopy.column);
   
    if(boardCopy.view[i][j]=='*'){
        boardCopy.view[i][j] = 'F';
        
        setStyleFillCell(i, j, theme, boardCopy.view[i][j], "cell" + typeB);
    } else if(boardCopy.view[i][j]=='F'){
        boardCopy.view[i][j] = '*';

        setStyleFillCell(i, j, theme, boardCopy.view[i][j], "cell" + typeB);
    }
}

export async function revealCell(i, j){
    let theme = window.getComputedStyle(document.body).getPropertyValue('--bg-box-color')=='#212325'? "DARK" : "LIGHT";
    let typeB = getTypeBoardStr(boardCopy.typeBoard, i, j, boardCopy.row, boardCopy.column);
   
    if(boardCopy.view[i][j]=='*'){
        boardCopy.view[i][j] = boardCopy.structure[i][j];

        if(boardCopy.view[i][j]=='B')
            setDefeat();
        else 
            verifVictory();
        
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
    } else if(typeBoard=="H"){
        let middle = Math.trunc((boardCopy.view).length/2);
        if(i <= middle) {
            if(allowIncrement(i-1, j-1, limI, limJ, boardCopy.view))
                revealCell(i-1, j-1);
        } else {
            if(allowIncrement(i-1, j+1, limI, limJ, boardCopy.view))
                revealCell(i-1, j+1);
        }

        if(allowIncrement(i-1, j, limI, limJ, boardCopy.view))
            revealCell(i-1, j);

        if(allowIncrement(i, j-1, limI, limJ, boardCopy.view))
            revealCell(i, j-1);
        if(allowIncrement(i, j+1, limI, limJ, boardCopy.view))
            revealCell(i, j+1);
            
        if(allowIncrement(i+1, j, limI, limJ, boardCopy.view))
            revealCell(i+1, j);
        
        if(i >= middle){
            if(allowIncrement(i+1, j-1, limI, limJ, boardCopy.view))
                revealCell(i+1, j-1);
        } else {
            if(allowIncrement(i+1, j+1, limI, limJ, boardCopy.view))
                revealCell(i+1, j+1);
        }
    }
}

function verifVictory() {
    contCellReveal++;    
    if(contCellReveal==getTotalValidCells())
        setVictory();
}

function getTotalValidCells(){
    if(boardCopy.typeBoard=='T' || boardCopy.typeBoard=='S')
        return (boardCopy.totalValidCells-boardCopy.totalBombs)
    else
        return boardCopy.totalValidCells+1;
}