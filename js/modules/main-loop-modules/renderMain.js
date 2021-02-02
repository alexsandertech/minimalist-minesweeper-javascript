import { alignmentFlex }  from '../../components/generic-components/alignmentElement.js';

import { createHTML }  from '../../components/createHTML.js';
import { createSTYLE } from '../../components/createSTYLE.js';

export async function renderMain(board, options){
    renderTime(0);
    await renderBox();
    await renderCells(board.column, board.row, board.structure, options.theme, board.typeBoard);
    renderButtons();
}

function renderTime(num){
    let strTime = getStrTime(num);
    
    createHTML( "DIV", "beforeEnd", "#game", "divTime", strTime);
    document.querySelector(".divTime").style.width = "545px";    
    document.querySelector(".divTime").style.fontFamily = "Avenir";
    document.querySelector(".divTime").style.fontSize = "22px";
    document.querySelector(".divTime").style.marginBottom = "5px";
    document.querySelector(".divTime").style.color = "var(--line-box-color)";
    alignmentFlex(".divTime", "flex", "row", "flex-end", "flex-end");

    alignmentFlex("#game", "flex", "column", "center", "center");
}

function getStrTime(num){
    let strTime = [0, 0, 0];
    strTime[0] = num%60;
    strTime[1] = Math.trunc(num/60);
    strTime[2] = Math.trunc(strTime[1]/60);

    if(strTime[2]==0)
        if(strTime[1]==0)
            return strTime[0]+"sec";
        else 
            return strTime[1]+"min " + strTime[0]+"sec";
    else {
        strTime[1] -= strTime[2]*60;
        return strTime[2]+"h " + strTime[1]+"min " + strTime[0]+"sec";
    }
}

async function renderBox(){
    createHTML( "DIV", "beforeEnd", "#game", "baseBoxMain", "" );
    createSTYLE("BOX", "baseBoxMain", 520, 550, 1, 10, "var(--bg-box-main)", "var(--line-box-color)");
    alignmentFlex(".baseBoxMain", "flex", "column", "center", "center");
}

async function renderCells(column, row, view, theme, typeBoard){
    for(let i=0; i<row; i++){
        createLineVoid(i);        
        for(let j=0; j<column; j++){
            if(view[i][j]!=null) {
                createVoidCell(i, j);
                
                if(typeBoard=='S') {
                    createFillCell(i, j, theme, view[i][j], "cellSquare");
                    //createCellSquare(i, j, theme, view[i][j]);
                } else if(typeBoard=='H') {
                    createFillCell(i, j, theme, view[i][j], "cellHexagon");
                } else if(typeBoard=='T') {
                    if((row + column)%2==1){
                        if((j+i)%2==1) {
                            createFillCell(i, j, theme, view[i][j], "cellTriangle");
                            document.querySelector(".cell-"+i+"-"+j).style.paddingTop = "5px";
                        } else { 
                            createFillCell(i, j, theme, view[i][j], "cellTriangleI");
                            document.querySelector(".cell-"+i+"-"+j).style.paddingBottom = "5px";
                        }
                    } else {
                        if((j+i)%2==1) {
                            createFillCell(i, j, theme, view[i][j], "cellTriangleI");
                            document.querySelector(".cell-"+i+"-"+j).style.paddingBottom = "5px";
                        } else {
                            createFillCell(i, j, theme, view[i][j], "cellTriangle");
                            document.querySelector(".cell-"+i+"-"+j).style.paddingTop = "5px";
                        }
                    }
                    document.querySelector(".lineCell-"+i).style.marginTop = "10px";//Custom spacing for triangular board
                    //createCellTriangle(i, j, theme, row, column, view[i][j]);
                }
                
                applyStyleDefaultCell(i, j);
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
}

function createFillCell(i, j, theme, c, strLocal) {
    if(c=='*')
        document.querySelector(".cell-"+i+"-"+j).style.backgroundImage = "url(/imgs/"+theme+"/"+strLocal+".png)";
    else if(c=='B')
        document.querySelector(".cell-"+i+"-"+j).style.backgroundImage = "url(/imgs/"+theme+"/"+strLocal+"Bomb.png)";
    else if(c=='0')
        document.querySelector(".cell-"+i+"-"+j).style.backgroundImage = "url(/imgs/"+theme+"/"+strLocal+"Void.png)";
    else if(c=='1' || c=='2' || c=='3' || c=='4' || c=='5' || c=='6' || c=='7' || c=='8')
        createCellNumber(c, i, j, "url(/imgs/"+theme+"/"+strLocal+"Void.png)")
}

function createCellNumber(num, i, j, strLocal){
    document.querySelector(".cell-"+i+"-"+j).style.backgroundImage = strLocal;
    document.querySelector(".cell-"+i+"-"+j).innerHTML += num;
    //document.querySelector(".cell-"+i+"-"+j).style

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

function renderButtons(){
    createHTML( "DIV", "beforeEnd", "#game", "divBtns", "" );
    alignmentFlex(".divBtns", "flex", "row", "center", "center");
    
    createHTML( "DIV", "beforeEnd", ".divBtns", "btn-restart", "restart" );
    createSTYLE("BTN", "btn-restart", 15, 3, 30, 90);

    createHTML( "DIV", "beforeEnd", ".divBtns", "btn-back", "back" );
    createSTYLE("BTN", "btn-back", 15, 2, 30, 90);
}
