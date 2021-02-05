import { createHTML }     from '../../../components/createHTML.js';
import { createSTYLE }    from '../../../components/createSTYLE.js';
import { alignmentFlex }  from '../../../components/alignmentElement.js';

import { listenerElement } from "../listenerButtons.js";
import { setColorMode }    from "../../home.js";

export async function renderOptions(options){
    renderBox();
    renderTitles();
    renderOptionsSet(options);

    renderButtonBack();
    await listenerClick();

    options = updateOptions(options)
    removeRender();
    
    console.log(options);
    return options;
}

function removeRender(){
    document.querySelector(".options").remove();
}

function renderBox(){    
    createHTML( "DIV", "afterend", "#game", "options", "" );
    createSTYLE("MODAL", "options");
    createHTML( "DIV", "beforeEnd", ".options", "optionBox", "" );
    createSTYLE("BOX", "optionBox", 430, 800, 1, 7, "var(--bg-box-color)", "var(--line-box-color)");
    alignmentFlex(".options", "flex", "row", "center", "center");
        document.querySelector(".optionBox").style.marginTop = "15px";
        document.querySelector(".optionBox").style.animation = "animationArise 1s";
}

function renderTitles(){    
    createHTML( "DIV", "beforeEnd", ".optionBox", "titleOptions","OPTIONS" );
    createSTYLE("TITLE", "titleOptions", 26, 2);
    createHTML( "DIV", "beforeEnd", ".titleOptions", "lineToTitleOptions", "" );
    createSTYLE("LINE", "lineToTitleOptions", 50);
       document.querySelector(".titleOptions").style.margin = "20px";
       document.querySelector(".titleOptions").style.marginLeft = "29px";
       

    createHTML( "DIV", "beforeEnd", ".optionBox", "subTitles","" );
       alignmentFlex(".subTitles", "flex", "row", "space-between", "center");

    createHTML( "DIV", "beforeEnd", ".subTitles", "titleBoard","BOARDSHAPE" );
    createSTYLE("TITLE", "titleBoard", 16, 2);
        document.querySelector(".titleBoard").style.marginLeft = "140px";

    createHTML( "DIV", "beforeEnd", ".subTitles", "titleDifficulty","DIFFICULTY" );
    createSTYLE("TITLE", "titleDifficulty", 16, 2);
        document.querySelector(".titleDifficulty").style.marginRight = "142px";
}

function renderButtonBack(){
    createHTML( "DIV", "beforeEnd", ".optionBox", "backMenu","back" );
    createSTYLE("BTN", "backMenu", 17, 2, 35, 100);
    document.querySelector(".backMenu").style.margin = "auto";
}

async function listenerClick(){
    listenerElement(".backMenu", btnClickedBack);
    let getClickBack = await getClicked();
}

function btnClickedBack(){
    document.querySelector(".backMenu").classList.add("active");    
}

async function getClicked(){
    let flag = false;
    do{
        await sleep(500);
        flag = returnActive();
    }while(flag==false);
    
    return flag;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function returnActive(){
    return document.querySelector(".backMenu").classList.contains("active");;
}

function renderOptionsSet(options){    
    renderTotalSpaceOptions();//Creating window
    
    renderSideLeftOptions(options.typeBoard);//Board
    renderSideRightOptions(options.difficulty);//Difficulty and Theme
}

function renderTotalSpaceOptions() {
    createHTML( "DIV", "beforeEnd", ".optionBox", "optionsSpace","" );
    document.querySelector(".optionsSpace").style.height = "265px";
    document.querySelector(".optionsSpace").style.marginTop = "15px";
    document.querySelector(".optionsSpace").style.marginBottom = "-0px";
    alignmentFlex(".optionsSpace", "flex", "row", "center", "center");
}

function renderSideLeftOptions(typeBoard) {
    renderVoidSpaceLeft();//Creating empty left space   
    renderOptionsBoard(typeBoard);
    renderSelectionsOptionsBoard();
}

function renderVoidSpaceLeft(){
    createHTML( "DIV", "beforeEnd", ".optionsSpace", "optionsSideLeft","" );
    document.querySelector(".optionsSideLeft").style.width = "50%";
    document.querySelector(".optionsSideLeft").style.height = "100%";
    document.querySelector(".optionsSideLeft").style.borderRight = "2px solid var(--line-button-type-1)";
    document.querySelector(".optionsSideLeft").style.marginBottom = "30px";

    //document.querySelector(".optionsSideLeft").style.backgroundColor = "#F0F";
}

function renderSelectionsOptionsBoard(){
    createHTML( "DIV", "afterbegin", ".optionsSideLeft", "selectedTypeBoard","" );
    document.querySelector(".selectedTypeBoard").style.width = "100%";
    document.querySelector(".selectedTypeBoard").style.height = "60%";
    document.querySelector(".selectedTypeBoard").style.backgroundPosition = "center";
    document.querySelector(".selectedTypeBoard").style.backgroundRepeat = "no-repeat";
    
    renderSelectedBoard();
    document.getElementById('Triangle').onchange = renderSelectedBoard;
    document.getElementById('Hexagon').onchange = renderSelectedBoard;
    document.getElementById('Square').onchange = renderSelectedBoard;
}

function renderSelectedBoard(){
    let typeBoard = document.querySelector('input[name="optBoardShape"]:checked').value[0];
    let theme = window.getComputedStyle(document.body).getPropertyValue('--bg-box-color')=='#212325'? "DARK" : "LIGHT";

    if(document.getElementsByName('optBoardShape')[2].checked == true || typeBoard=='H')
        document.querySelector(".selectedTypeBoard").style.backgroundImage = "url(./../../../imgs/"+theme+"/cellHexagon.png)";
    else if(document.getElementsByName('optBoardShape')[1].checked == true || typeBoard=='S')
        document.querySelector(".selectedTypeBoard").style.backgroundImage = "url(./../../../imgs/"+theme+"/cellSquare.png)";
    else if(document.getElementsByName('optBoardShape')[0].checked == true || typeBoard=='T')
        document.querySelector(".selectedTypeBoard").style.backgroundImage = "url(./../../../imgs/"+theme+"/cellTriangle.png)";
    
    document.querySelector(".selectedTypeBoard").style.backgroundSize = "110px";
    //Update option board selected
    renderBtnSelectedBoardShape();
}

function renderOptionsBoard(typeBoard){
    createHTML( "DIV", "beforeEnd", ".optionsSideLeft", "sideScreenBoard","" );
    document.querySelector(".sideScreenBoard").style.display = "flex";
    document.querySelector(".sideScreenBoard").style.flexDirection = "row";
    document.querySelector(".sideScreenBoard").style.justifyContent = "space-around";
    document.querySelector(".sideScreenBoard").style.marginTop = "-12px";

    //Options to select board format
    createHTML( "RD", "beforeEnd", ".sideScreenBoard", "optBoardShape","Triangle" );
    createHTML( "RD", "beforeEnd", ".sideScreenBoard", "optBoardShape","Square" );
    createHTML( "RD", "beforeEnd", ".sideScreenBoard", "optBoardShape","Hexagon" );

    //Get typeBoard after-> document.querySelector('input[name="optBoardShape"]:checked').value
    if(typeBoard=='T') {
        document.getElementsByName('optBoardShape')[0].checked = true;
    } else if(typeBoard=='S') {
        document.getElementsByName('optBoardShape')[1].checked = true;
    } else if(typeBoard=='H') {
        document.getElementsByName('optBoardShape')[2].checked = true;
    }
    
    renderBtnSelectedBoardShape();
}

function renderBtnSelectedBoardShape(){
    let theme = window.getComputedStyle(document.body).getPropertyValue('--bg-box-color')=='#212325'? "DARK" : "LIGHT";
    let typeBoard = document.querySelector('input[name="optBoardShape"]:checked').value;
    //document.getElementsByName('optBoardShape')[0].checked = true;
    
    insertBtnOptionBoardShape("Triangle", theme, typeBoard);
    insertBtnOptionBoardShape("Square", theme, typeBoard);
    insertBtnOptionBoardShape("Hexagon", theme, typeBoard);
}

function insertBtnOptionBoardShape(local, theme, typeBoard){
    
    //let oldHTML = document.getElementById("label"+local).innerHTML;

    document.querySelector("#label"+local).style.backgroundImage = "url(./../../../imgs/"+theme+"/cell"+local+".png)";    
    document.querySelector("#label"+local).style.backgroundPosition = "50% 29%";
    document.querySelector("#label"+local).style.backgroundRepeat = "no-repeat";
    document.querySelector("#label"+local).style.backgroundSize = "40px";
    
    document.querySelector("#label"+local).style.fontFamily = "Rubik Light";
    document.querySelector("#label"+local).style.fontSize = "12px";
    document.querySelector("#label"+local).style.color = "var(--font-color-line)";
    document.querySelector("#label"+local).style.cursor = "pointer";

    document.querySelector("#label"+local).style.display = "flex";
    document.querySelector("#label"+local).style.flexDirection = "column";
    document.querySelector("#label"+local).style.alignItems = "center";
    document.querySelector("#label"+local).style.justifyContent = "flex-end";
    document.querySelector("#label"+local).style.width = "100px";
    document.querySelector("#label"+local).style.height = "68px";
    document.querySelector("#label"+local).style.padding = "3px";

    document.querySelector("#label"+local).style.boderRadius = "";
    document.querySelector("#label"+local).style.boxShadow = "";

    if(typeBoard == local){
        document.querySelector("#label"+local).style.backgroundImage = "url(./../../../imgs/"+theme+"/cell"+local+"Check.png)";    
        document.querySelector("#label"+local).style.backgroundPosition = "95% 0%";
        document.querySelector("#label"+local).style.backgroundSize = "68px";
        document.querySelector("#label"+local).style.borderRadius = "5px";
        document.querySelector("#label"+local).style.boxShadow = "1px 1px 10px var(--shadow-box-color-btn)";
    }
}

function renderSideRightOptions(difficulty){   
    renderVoidSpaceRight(); //Creating empty right space
    
    renderOptionsDifficulty(difficulty);
    renderOptionsTheme();
}

function renderVoidSpaceRight(){    
    createHTML( "DIV", "beforeEnd", ".optionsSpace", "optionsSideRight","" );
    document.querySelector(".optionsSideRight").style.width = "50%";
    document.querySelector(".optionsSideRight").style.height = "100%";
    //document.querySelector(".optionsSideRight").style.backgroundColor = "#00F";
}

function renderOptionsDifficulty(difficulty){

    createHTML( "DIV", "beforeEnd", ".optionsSideRight", "btnDifficulty","" );
    document.querySelector(".btnDifficulty").style.display = "flex";
    document.querySelector(".btnDifficulty").style.flexDirection = "row";

    btnLeftDifficulty();
    btnMiddleDifficulty(difficulty);
    btnRightDifficulty();
    alignTextBtnDifficult();

}

function btnLeftDifficulty() {
    createHTML( "DIV", "beforeEnd", ".btnDifficulty", "btnLeftDifficulty","" );
    document.querySelector(".btnLeftDifficulty").style.height = "40px";
    document.querySelector(".btnLeftDifficulty").style.width = "30px";
    document.querySelector(".btnLeftDifficulty").style.marginTop= "20px";
    document.querySelector(".btnLeftDifficulty").style.marginLeft= "auto";
    document.querySelector(".btnLeftDifficulty").style.borderRadius = "10px 0px 0px 10px";
    document.querySelector(".btnLeftDifficulty").style.marginBottom = "30px";
    document.querySelector(".btnLeftDifficulty").style.cursor = "pointer";

    document.querySelector(".btnLeftDifficulty").innerHTML = "<img unselectable='on' id='btnL'src=\'/imgs/moveLeftDifficulty.png\' width=\'12px\' />";
    document.querySelector("#btnL").style.marginTop = "12px";
    document.querySelector("#btnL").style.marginLeft = "8px";
    document.querySelector('.btnLeftDifficulty').onclick = setNewDifficulty;
}

function btnMiddleDifficulty(difficulty){
    
    createHTML( "DIV", "beforeEnd", ".btnDifficulty", "btnMiddleDifficulty","" );
    document.querySelector(".btnMiddleDifficulty").style.width = "150px";
    document.querySelector(".btnMiddleDifficulty").style.height = "40px";
    document.querySelector(".btnMiddleDifficulty").style.overflow = "hidden";
    document.querySelector(".btnMiddleDifficulty").style.marginTop= "20px";
    document.querySelector(".btnMiddleDifficulty").style.marginBottom = "30px";
    
    document.querySelector(".btnMiddleDifficulty").style.display = "flex";
    document.querySelector(".btnMiddleDifficulty").style.flexDirection = "column";
    document.querySelector(".btnMiddleDifficulty").style.alignItems = "center";

    document.querySelector(".btnMiddleDifficulty").style.fontFamily = "Rubik Light";
    document.querySelector(".btnMiddleDifficulty").style.color = "#FFF";

    createHTML( "RD", "beforeEnd", ".btnMiddleDifficulty", "optDifficulty","Easy" );
    createHTML( "RD", "beforeEnd", ".btnMiddleDifficulty", "optDifficulty","Normal" );
    createHTML( "RD", "beforeEnd", ".btnMiddleDifficulty", "optDifficulty","Hard" );
    createHTML( "RD", "beforeEnd", ".btnMiddleDifficulty", "optDifficulty","Impossible" );
    
    
    //document.querySelector(".optDifficulty").style.width = "100px";
    //document.querySelector('input[name="optDifficulty"]:checked').value
    if(difficulty=='E')
        document.getElementsByName('optDifficulty')[0].checked = true;
    else if(difficulty=='N')
        document.getElementsByName('optDifficulty')[1].checked = true;
    else if(difficulty=='H')
        document.getElementsByName('optDifficulty')[2].checked = true;
    else if(difficulty=='I')
        document.getElementsByName('optDifficulty')[3].checked = true;
        
    //alignTextBtnDifficult();
}

function btnRightDifficulty(){
    createHTML( "DIV", "beforeEnd", ".btnDifficulty", "btnRightDifficulty","" );
    document.querySelector(".btnRightDifficulty").style.height = "40px";
    document.querySelector(".btnRightDifficulty").style.width = "30px";
    document.querySelector(".btnRightDifficulty").style.marginTop= "20px";
    document.querySelector(".btnRightDifficulty").style.marginBottom = "30px";
    document.querySelector(".btnRightDifficulty").style.marginRight= "auto";
    document.querySelector(".btnRightDifficulty").style.cursor = "pointer";
    document.querySelector(".btnRightDifficulty").style.borderRadius = "0px 10px 10px 0px";

    document.querySelector(".btnRightDifficulty").innerHTML = "<img unselectable='on' id='btnR'src=\'/imgs/moveRighDifficulty.png\' width=\'12px\' />";
    document.querySelector("#btnR").style.marginTop = "12px";
    document.querySelector("#btnR").style.marginLeft = "8px";
    document.querySelector('.btnRightDifficulty').onclick = setNewDifficulty;
}

function setNewDifficulty(){
    if(this.className == "btnLeftDifficulty"){
        if(document.getElementsByName('optDifficulty')[0].checked == true){
            document.getElementsByName('optDifficulty')[3].checked = true;
        } else if(document.getElementsByName('optDifficulty')[1].checked == true){            
            document.getElementsByName('optDifficulty')[0].checked = true;
        } else if(document.getElementsByName('optDifficulty')[2].checked == true){            
            document.getElementsByName('optDifficulty')[1].checked = true;
        } else if(document.getElementsByName('optDifficulty')[3].checked == true){            
            document.getElementsByName('optDifficulty')[2].checked = true;
        }
    } else {
        if(document.getElementsByName('optDifficulty')[0].checked == true){
            document.getElementsByName('optDifficulty')[1].checked = true;
        } else if(document.getElementsByName('optDifficulty')[1].checked == true){            
            document.getElementsByName('optDifficulty')[2].checked = true;
        } else if(document.getElementsByName('optDifficulty')[2].checked == true){            
            document.getElementsByName('optDifficulty')[3].checked = true;
        } else if(document.getElementsByName('optDifficulty')[3].checked == true){            
            document.getElementsByName('optDifficulty')[0].checked = true;
        }
    }
    alignTextBtnDifficult();
}

function alignTextBtnDifficult(){    
    if(document.getElementsByName('optDifficulty')[0].checked == true){
        document.querySelector(".classEasy").style.marginTop = "-10px";

        document.querySelector(".btnMiddleDifficulty").style.backgroundColor = "#0F6FB6";
        document.querySelector(".btnLeftDifficulty").style.backgroundColor = "#0093FF";
        document.querySelector(".btnRightDifficulty").style.backgroundColor = "#0093FF";

    } else if(document.getElementsByName('optDifficulty')[1].checked == true){   
        document.querySelector(".classEasy").style.marginTop = "-48px";

        document.querySelector(".btnMiddleDifficulty").style.backgroundColor = "#787979";
        document.querySelector(".btnLeftDifficulty").style.backgroundColor = "#909192";
        document.querySelector(".btnRightDifficulty").style.backgroundColor = "#909192";
        
    } else if(document.getElementsByName('optDifficulty')[2].checked == true){  
        document.querySelector(".classEasy").style.marginTop = "-86px";
        
        document.querySelector(".btnMiddleDifficulty").style.backgroundColor = "#6D3737";
        document.querySelector(".btnLeftDifficulty").style.backgroundColor = "#A83F3C";
        document.querySelector(".btnRightDifficulty").style.backgroundColor = "#AA3F3C";
        
    } else if(document.getElementsByName('optDifficulty')[3].checked == true){  
        document.querySelector(".classEasy").style.marginTop = "-124px";
        
        document.querySelector(".btnMiddleDifficulty").style.backgroundColor = "#0F0F0F";
        document.querySelector(".btnLeftDifficulty").style.backgroundColor = "#1A1A1A";
        document.querySelector(".btnRightDifficulty").style.backgroundColor = "#1A1A1A";
        
    }
}

function renderOptionsTheme(){
    createHTML( "DIV", "beforeEnd", ".optionsSideRight", "sideBoxTheme","" );
    document.querySelector(".sideBoxTheme").style.width = "100%";
    document.querySelector(".sideBoxTheme").style.height = "60%";

    createHTML( "DIV", "beforeEnd", ".sideBoxTheme", "titleTheme","THEME" );
    createSTYLE("TITLE", "titleTheme", 16, 2);
        document.querySelector(".titleTheme").style.marginLeft = "167px";
    
    createHTML( "DIV", "beforeEnd", ".sideBoxTheme", "sideScreenTheme","" );
    document.querySelector(".sideScreenTheme").style.width = "300px";
    document.querySelector(".sideScreenTheme").style.margin = "auto";
    document.querySelector(".sideScreenTheme").style.marginTop = "25px";


    renderBtnSetTheme();
    
    document.querySelector(".sideScreenTheme").style.height = "50px";
    document.querySelector(".sideScreenTheme").style.cursor = "pointer";
    
    document.querySelector('.sideScreenTheme').onclick =  function() {
           setColorMode();

           //Update colors menu options
           renderBtnSelectedBoardShape();
           renderSelectedBoard();
           renderBtnSetTheme()
    };
}

function renderBtnSetTheme(){
    let theme = window.getComputedStyle(document.body).getPropertyValue('--bg-box-color')=='#212325'? "DARK" : "LIGHT";
    //document.querySelector(".sideScreenTheme").style.backgroundColor = "#FAF";
    document.querySelector(".sideScreenTheme").style.backgroundImage = "url(./../../../imgs/"+theme+"/themeSet.png)";
    document.querySelector(".sideScreenTheme").style.backgroundSize = "250px";
    document.querySelector(".sideScreenTheme").style.backgroundPosition = "center";
    document.querySelector(".sideScreenTheme").style.backgroundRepeat = "no-repeat";
}

function updateOptions(options){
    options.difficulty = document.querySelector('input[name="optDifficulty"]:checked').value[0];
    options.typeBoard = document.querySelector('input[name="optBoardShape"]:checked').value[0];

    if(window.getComputedStyle(document.body).getPropertyValue('--bg-box-color')=='#212325')
        options.theme = 'DARK';
    else 
        options.theme = 'LIGHT';

    return options;
}
