import { createHTML }  from '../../components/createHTML.js';
import { createSTYLE } from '../../components/createSTYLE.js';
import { alignmentFlex }  from '../../components/alignmentElement.js';
import { getStrTime }       from '../general-modules/strTime.js';

export async function renderMain(board, options, num){
    console.log(" >> Initializing renderMain()");
    await createTime();
          renderTime(num);

    await createBox();
          renderBox();

    await createCells(board.column, board.row, board.view);
          renderCells(board.column, board.row, board.view, options.theme, board.typeBoard);
          
    await createButtons();
          renderButtons();
    
    console.log(" << Finalizing renderMain()");
}

async function createTime(){
    createHTML( "DIV", "beforeEnd", "#game", "divTime", "-");
    document.querySelector(".divTime").style.width = "545px";    
    document.querySelector(".divTime").style.fontFamily = "Avenir";
    document.querySelector(".divTime").style.fontSize = "22px";
    document.querySelector(".divTime").style.marginBottom = "5px";
    document.querySelector(".divTime").style.color = "var(--line-box-color)";
    alignmentFlex(".divTime", "flex", "row", "flex-end", "flex-end");

    alignmentFlex("#game", "flex", "column", "center", "center");
}

export function renderTime(num){    
    document.querySelector(".divTime").innerHTML = getStrTime(num);     
}

async function createBox(){
    createHTML( "DIV", "beforeEnd", "#game", "baseBoxMain", "" );
}

function renderBox(){
    createSTYLE("BOX", "baseBoxMain", 520, 550, 1, 10, "var(--bg-box-main)", "var(--line-box-color)");
    alignmentFlex(".baseBoxMain", "flex", "column", "center", "center");
}

async function createCells(column, row, view){
    for(let i=0; i<row; i++){
        createLineVoid(i);        
        for(let j=0; j<column; j++){
            if(view[i][j]!=null) {
                createVoidCell(i, j);
                applyStyleDefaultCell(i, j);
            }
        }
    }
}

export async function renderCells(column, row, view, theme, typeBoard){
    for(let i=0; i<row; i++){ 
        for(let j=0; j<column; j++){
            if(view[i][j]!=null) {                
                if(typeBoard=='S') {
                    setStyleFillCell(i, j, theme, view[i][j], "cellSquare");
                    //createCellSquare(i, j, theme, view[i][j]);
                } else if(typeBoard=='H') {
                    setStyleFillCell(i, j, theme, view[i][j], "cellHexagon");
                } else if(typeBoard=='T') {
                    if((row + column)%2==1){
                        if((j+i)%2==1) {
                            setStyleFillCell(i, j, theme, view[i][j], "cellTriangle");
                            document.querySelector(".cell-"+i+"-"+j).style.paddingTop = "5px";
                        } else { 
                            setStyleFillCell(i, j, theme, view[i][j], "cellTriangleI");
                            document.querySelector(".cell-"+i+"-"+j).style.paddingBottom = "5px";
                        }
                    } else {
                        if((j+i)%2==1) {
                            setStyleFillCell(i, j, theme, view[i][j], "cellTriangleI");
                            document.querySelector(".cell-"+i+"-"+j).style.paddingBottom = "5px";
                        } else {
                            setStyleFillCell(i, j, theme, view[i][j], "cellTriangle");
                            document.querySelector(".cell-"+i+"-"+j).style.paddingTop = "5px";
                        }
                    }
                    document.querySelector(".lineCell-"+i).style.marginTop = "10px";//Custom spacing for triangular board
                    //createCellTriangle(i, j, theme, row, column, view[i][j]);
                }
            }            
        }
    }
}

function createLineVoid(i){    
    createHTML( "DIV", "beforeEnd", ".baseBoxMain", "lineCell-"+i, "" );
    createSTYLE("BOX", "lineCell-"+i, 30, 550, 0, 0, "0", "0");
    document.querySelector(".lineCell-"+i).style.boxShadow = "none";
    alignmentFlex(".lineCell-"+i, "flex", "row", "center", "center");
}

function createVoidCell(i, j){
    createHTML( "DIV", "beforeEnd", ".lineCell-"+i, "cell-"+i+"-"+j, "" );
    createSTYLE("BOX", "cell-"+i+"-"+j, 32, 32, 1, 1, "", "");

    document.querySelector(".cell-"+i+"-"+j).style.boxShadow = "none";
    document.querySelector(".cell-"+i+"-"+j).style.border = "none";
    document.querySelector(".cell-"+i+"-"+j).style.cursor = "pointer";
}

export function setStyleFillCell(i, j, theme, c, strLocal) {
    if(c=='*')
        document.querySelector(".cell-"+i+"-"+j).style.backgroundImage = "url(/imgs/"+theme+"/"+strLocal+".png)";
    else if(c=='B')
        document.querySelector(".cell-"+i+"-"+j).style.backgroundImage = "url(/imgs/"+theme+"/"+strLocal+"Bomb.png)";
    else if(c=='0')
        document.querySelector(".cell-"+i+"-"+j).style.backgroundImage = "url(/imgs/"+theme+"/"+strLocal+"Void.png)";
    else if(c=='F')
        document.querySelector(".cell-"+i+"-"+j).style.backgroundImage = "url(/imgs/"+theme+"/"+strLocal+"Flag.png)";
    else if(c=='1' || c=='2' || c=='3' || c=='4' || c=='5' || c=='6' || c=='7' || c=='8')
        createCellNumber(c, i, j, "url(/imgs/"+theme+"/"+strLocal+"Void.png)")
}

function createCellNumber(num, i, j, strLocal){
    document.querySelector(".cell-"+i+"-"+j).style.backgroundImage = strLocal;
    document.querySelector(".cell-"+i+"-"+j).innerHTML += num;
}

function applyStyleDefaultCell(i, j){    
    document.querySelector(".cell-"+i+"-"+j).style.backgroundSize = "28px";
    document.querySelector(".cell-"+i+"-"+j).style.backgroundRepeat = "no-repeat";
    document.querySelector(".cell-"+i+"-"+j).style.backgroundPosition = "center";
    document.querySelector(".cell-"+i+"-"+j).style.filter = "drop-shadow(1px 1px 2px var(--shadow-box-color)";
    document.querySelector(".cell-"+i+"-"+j).style.fontFamily = "Rubik Ligh";
    document.querySelector(".cell-"+i+"-"+j).style.color = "var(--font-color-title)";
    document.querySelector(".cell-"+i+"-"+j).style.display = "flex";
    document.querySelector(".cell-"+i+"-"+j).style.justifyContent = "center";
    document.querySelector(".cell-"+i+"-"+j).style.alignItems = "center";
}

async function createButtons(){
    createHTML( "DIV", "beforeEnd", "#game", "divBtns", "" );
    alignmentFlex(".divBtns", "flex", "row", "center", "center");
    
    createHTML( "DIV", "beforeEnd", ".divBtns", "btn-restart", "restart" );
    createHTML( "DIV", "beforeEnd", ".divBtns", "btn-back", "back" );
}

function renderButtons(){
    createSTYLE("BTN", "btn-restart", 15, 3, 30, 90);
    createSTYLE("BTN", "btn-back", 15, 2, 30, 90);
}