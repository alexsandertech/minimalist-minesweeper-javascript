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
    document.querySelector(".optionsSpace").style.backgroundColor = "#FFF";
    alignmentFlex(".optionsSpace", "flex", "row", "center", "center");
}

function renderSideLeftOptions(typeBoard) {
    createHTML( "DIV", "beforeEnd", ".optionsSpace", "optionsSideLeft","" );
    document.querySelector(".optionsSideLeft").style.width = "50%";
    document.querySelector(".optionsSideLeft").style.height = "100%";
    document.querySelector(".optionsSideLeft").style.backgroundColor = "#F0F";

    renderOptionsBoard(typeBoard);
}

function renderOptionsBoard(typeBoard){
    createHTML( "DIV", "beforeEnd", ".optionsSideLeft", "sideScreenBoard","" );
    createHTML( "RD", "beforeEnd", ".sideScreenBoard", "optBoardShape","Triangle" );
    createHTML( "RD", "beforeEnd", ".sideScreenBoard", "optBoardShape","Square" );
    createHTML( "RD", "beforeEnd", ".sideScreenBoard", "optBoardShape","Hexagon" );
    //document.querySelector('input[name="optBoardShape"]:checked').value
    if(typeBoard=='T')
        document.getElementsByName('optBoardShape')[0].checked = true;
    else if(typeBoard=='S')
        document.getElementsByName('optBoardShape')[1].checked = true;
    else if(typeBoard=='H')
        document.getElementsByName('optBoardShape')[2].checked = true;
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
