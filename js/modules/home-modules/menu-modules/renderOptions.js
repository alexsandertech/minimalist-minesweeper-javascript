import { createHTML }     from '../../../components/createHTML.js';
import { createSTYLE }    from '../../../components/createSTYLE.js';
import { alignmentFlex }  from '../../../components/generic-components/alignmentElement.js';

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
        document.querySelector(".titleBoard").style.marginLeft = "123px";

    createHTML( "DIV", "beforeEnd", ".subTitles", "titleDifficulty","DIFFICULTY" );
    createSTYLE("TITLE", "titleDifficulty", 16, 2);
        document.querySelector(".titleDifficulty").style.marginRight = "140px";
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
    renderTotalSpaceOptions();
    
    renderSideLeftOptions(options.typeBoard);//Board
    renderSideRightOptions(options.difficulty);//Difficulty and Theme
    //renderOptionsBoard(options.theme);

    //renderOptionsDifficulty();
}

function renderTotalSpaceOptions() {
    createHTML( "DIV", "beforeEnd", ".optionBox", "optionsSpace","" );
    document.querySelector(".optionsSpace").style.height = "265px";
    document.querySelector(".optionsSpace").style.marginTop = "15px";
    document.querySelector(".optionsSpace").style.marginBottom = "-0px";
    alignmentFlex(".optionsSpace", "flex", "row", "center", "center");
}

function renderSideLeftOptions(typeBoard) {

    renderVoidSpace();    
    renderOptionsBoard(typeBoard);
    renderSelectionsOptionsBoard();

}

function renderVoidSpace(){
    createHTML( "DIV", "beforeEnd", ".optionsSpace", "optionsSideLeft","" );
    document.querySelector(".optionsSideLeft").style.width = "50%";
    document.querySelector(".optionsSideLeft").style.height = "100%";
    document.querySelector(".optionsSideLeft").style.borderRight = "3px solid var(--line-button-type-1)";
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
    
    //Update option board selected
    renderBtnSelectedBoardShape();
}

function renderOptionsBoard(typeBoard){
    createHTML( "DIV", "beforeEnd", ".optionsSideLeft", "sideScreenBoard","" );
    document.querySelector(".sideScreenBoard").style.display = "flex";
    document.querySelector(".sideScreenBoard").style.flexDirection = "row";
    document.querySelector(".sideScreenBoard").style.justifyContent = "space-around";
    document.querySelector(".sideScreenBoard").style.marginTop = "-12px";

    createHTML( "RD", "beforeEnd", ".sideScreenBoard", "optBoardShape","Triangle" );
    createHTML( "RD", "beforeEnd", ".sideScreenBoard", "optBoardShape","Square" );
    createHTML( "RD", "beforeEnd", ".sideScreenBoard", "optBoardShape","Hexagon" );


    //document.querySelector('input[name="optBoardShape"]:checked').value
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
    //document.querySelector("#label"+local).innerHTML = "<img src=\"http://placehold.it/350x350\" width=\"40px\">" + oldHTML;

    document.querySelector("#label"+local).style.backgroundImage = "url(./../../../imgs/"+theme+"/cell"+local+".png)";    
    document.querySelector("#label"+local).style.backgroundPosition = "50% 15%";
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
    document.querySelector("#label"+local).style.width = "90px";
    document.querySelector("#label"+local).style.height = "70px";
    document.querySelector("#label"+local).style.padding = "3px";

    document.querySelector("#label"+local).style.boderRadius = "";
    document.querySelector("#label"+local).style.boxShadow = "";

    if(typeBoard == local){
        document.querySelector("#label"+local).style.borderRadius = "5px";
        document.querySelector("#label"+local).style.boxShadow = "1px 1px 10px var(--shadow-box-color-btn)";
    }
}

function renderSideRightOptions(difficulty){    
    createHTML( "DIV", "beforeEnd", ".optionsSpace", "optionsSideRight","" );
    document.querySelector(".optionsSideRight").style.width = "50%";
    document.querySelector(".optionsSideRight").style.height = "100%";
    document.querySelector(".optionsSideRight").style.backgroundColor = "#00F";
    
    renderOptionsDifficulty(difficulty);
    renderOptionsTheme();
}

function renderOptionsDifficulty(difficulty){
    createHTML( "DIV", "beforeEnd", ".optionsSideRight", "sideScreenDifficulty","" );
    document.querySelector(".sideScreenDifficulty").style.width = "100%";
    document.querySelector(".sideScreenDifficulty").style.height = "40%";
    document.querySelector(".sideScreenDifficulty").style.backgroundColor = "#066F";

    
    createHTML( "RD", "beforeEnd", ".sideScreenDifficulty", "optDifficulty","Easy" );
    createHTML( "RD", "beforeEnd", ".sideScreenDifficulty", "optDifficulty","Normal" );
    createHTML( "RD", "beforeEnd", ".sideScreenDifficulty", "optDifficulty","Hard" );
    createHTML( "RD", "beforeEnd", ".sideScreenDifficulty", "optDifficulty","Impossible" );
    //document.querySelector('input[name="optDifficulty"]:checked').value
    if(difficulty=='E')
        document.getElementsByName('optDifficulty')[0].checked = true;
    else if(difficulty=='N')
        document.getElementsByName('optDifficulty')[1].checked = true;
    else if(difficulty=='H')
        document.getElementsByName('optDifficulty')[2].checked = true;
    else if(difficulty=='I')
        document.getElementsByName('optDifficulty')[3].checked = true;
}

function renderOptionsTheme(){    
    createHTML( "DIV", "beforeEnd", ".optionsSideRight", "sideBoxTheme","" );
    document.querySelector(".sideBoxTheme").style.width = "100%";
    document.querySelector(".sideBoxTheme").style.height = "60%";
    document.querySelector(".sideBoxTheme").style.backgroundColor = "#000";

    createHTML( "DIV", "beforeEnd", ".sideBoxTheme", "titleTheme","THEME" );
    createSTYLE("TITLE", "titleTheme", 16, 2);
        document.querySelector(".titleTheme").style.marginLeft = "170px";
    
    createHTML( "DIV", "beforeEnd", ".sideBoxTheme", "sideScreenTheme","" );
    document.querySelector(".sideScreenTheme").style.width = "50px";
    document.querySelector(".sideScreenTheme").style.backgroundColor = "#FAF";
    
    document.querySelector(".sideScreenTheme").style.height = "50px";
    document.querySelector(".sideScreenTheme").style.cursor = "pointer";
    
    document.querySelector('.sideScreenTheme').onclick =  function() {
           setColorMode();

           //Update colors menu options
           renderBtnSelectedBoardShape();
           renderSelectedBoard();
    };
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
