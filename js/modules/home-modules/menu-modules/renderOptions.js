import { createHTML }  from '../../../components/createHTML.js';
import { createSTYLE } from '../../../components/createSTYLE.js';

import { alignmentFlex }  from '../../../components/generic-components/alignmentElement.js';

import { listenerElement } from "../listenerButtons.js";

export async function renderOptions(options){
    renderBox();
    renderTitles();
    renderOptionsSet(options);

    renderButtonBack();
    await listenerClick();
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
    createHTML( "DIV", "beforeEnd", ".optionBox", "optionsSpace","" );
    
    document.querySelector(".optionsSpace").style.height = "265px";
    document.querySelector(".optionsSpace").style.marginTop = "15px";
    document.querySelector(".optionsSpace").style.marginBottom = "-0px";
    document.querySelector(".optionsSpace").style.backgroundColor = "#FFF";
    alignmentFlex(".optionsSpace", "flex", "row", "center", "center");

    createHTML( "DIV", "beforeEnd", ".optionsSpace", "sideScreenBoard","" );
    document.querySelector(".sideScreenBoard").style.width = "50%";
    document.querySelector(".sideScreenBoard").style.height = "100%";
    document.querySelector(".sideScreenBoard").style.backgroundColor = "#F0F";

    createHTML( "DIV", "beforeEnd", ".optionsSpace", "sideScreenDifficulty","" );
    document.querySelector(".sideScreenDifficulty").style.width = "50%";
    document.querySelector(".sideScreenDifficulty").style.height = "100%";
    document.querySelector(".sideScreenDifficulty").style.backgroundColor = "#00F";

/*
    if(options.theme    =="DARK")
        document.querySelector(".options").style.backgroundImage = "url(../../../../imgs/instructionDark.png)";
    else
        document.querySelector(".options").style.backgroundImage = "url(../../../../imgs/instructionLight.png)";

    document.querySelector(".informations").style.backgroundSize = "700px";
    document.querySelector(".informations").style.backgroundRepeat = "no-repeat";*/
    //renderConstrols();
    //renderObjectives();
    //document.documentElement.style.setProperty('--bg-color', '#FFF');
}