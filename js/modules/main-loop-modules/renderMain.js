import { alignmentFlex }  from '../../components/generic-components/alignmentElement.js';

import { createHTML }  from '../../components/createHTML.js';
import { createSTYLE } from '../../components/createSTYLE.js';

export async function renderMain(board, options){
    //renderTime();
    await renderBox();
    await renderCells(board.column, board.row, board.view, options.theme, board.typeBoard);
    //renderButtons();
}

async function renderBox(){
    createHTML( "DIV", "beforeEnd", "#game", "baseBoxMain", "" );
    createSTYLE("BOX", "baseBoxMain", 520, 550, 1, 10, "var(--bg-box-main)", "var(--line-box-color)");
    alignmentFlex(".baseBoxMain", "flex", "column", "center", "center");
}

async function renderCells(column, row, view, theme, typeBoard){
    for(let i=0; i<row; i++){            
        createHTML( "DIV", "beforeEnd", ".baseBoxMain", "lineCell-"+i, "" );
        createSTYLE("BOX", "lineCell-"+i, 30, 550, 0, 0, "0", "0");
        document.querySelector(".lineCell-"+i).style.boxShadow = "none";
        alignmentFlex(".lineCell-"+i, "flex", "row", "center", "center");

        for(let j=0; j<column; j++){
            createHTML( "DIV", "beforeEnd", ".lineCell-"+i, "cell-"+i+"-"+j, "" );
            if(view[i][j]!=null) {
                createCell(typeBoard, theme, i, j, row, column);
            }
            //console.log("asj")
            
        }
    }
}

function createCell(typeBoard, theme, i, j, row, column){
    createSTYLE("BOX", "cell-"+i+"-"+j, 32, 32, 1, 1, "", "");
    //document.querySelector(".cell-"+i+"-"+j).style.marginTop = "10px";
    document.querySelector(".cell-"+i+"-"+j).style.boxShadow = "none";
    document.querySelector(".cell-"+i+"-"+j).style.border = "none";

    if(typeBoard=='S')
        document.querySelector(".cell-"+i+"-"+j).style.backgroundImage = "url(/imgs/"+theme+"/cellSquare.png)";
    if(typeBoard=='H')
        document.querySelector(".cell-"+i+"-"+j).style.backgroundImage = "url(/imgs/"+theme+"/cellHexagon.png)";
    if(typeBoard=='T') {
        if((row + column)%2==1){
            if((j+i)%2==1)
                document.querySelector(".cell-"+i+"-"+j).style.backgroundImage = "url(/imgs/"+theme+"/cellTriangle.png)";
            else
                document.querySelector(".cell-"+i+"-"+j).style.backgroundImage = "url(/imgs/"+theme+"/cellTriangleI.png)";
                document.querySelector(".lineCell-"+i).style.marginTop = "10px";
        } else {
            if((j+i)%2==0)
                document.querySelector(".cell-"+i+"-"+j).style.backgroundImage = "url(/imgs/"+theme+"/cellTriangle.png)";
            else
                document.querySelector(".cell-"+i+"-"+j).style.backgroundImage = "url(/imgs/"+theme+"/cellTriangleI.png)";
                document.querySelector(".lineCell-"+i).style.marginTop = "10px";

        }

    }

        document.querySelector(".cell-"+i+"-"+j).style.backgroundSize = "28px";
        document.querySelector(".cell-"+i+"-"+j).style.backgroundRepeat = "no-repeat";
        document.querySelector(".cell-"+i+"-"+j).style.backgroundPosition = "center";
        document.querySelector(".cell-"+i+"-"+j).style.filter = "drop-shadow(1px 1px 2px var(--shadow-box-color)";
}