import { createHTML }  from '../../../components/createHTML.js';
import { createSTYLE } from '../../../components/createSTYLE.js';

import { alignmentFlex }  from '../../../components/generic-components/alignmentElement.js';

import { listenerElement } from "../listenerButtons.js";

export async function renderInstructions(theme){
    renderBox();
    renderTitles();
    await renderInformations(theme);
    renderButtonBack();

    await listenerClickBtnBack();
    removeRender();

    return;
}

function removeRender(){
    document.querySelector(".instruction").remove();
}


function renderBox(){    
    createHTML( "DIV", "afterend", "#game", "instruction", "" );
    createSTYLE("MODAL", "instruction");
    createHTML( "DIV", "beforeEnd", ".instruction", "instructionBox", "" );
    createSTYLE("BOX", "instructionBox", 430, 800, 1, 7, "var(--bg-box-color)", "var(--line-box-color)");
    alignmentFlex(".instruction", "flex", "row", "center", "center");
        document.querySelector(".instructionBox").style.marginTop = "15px";
        document.querySelector(".instructionBox").style.animation = "animationArise 1s";
}

function renderTitles(){    
    createHTML( "DIV", "beforeEnd", ".instructionBox", "titleInstructions","INSTRUCTIONS" );
    createSTYLE("TITLE", "titleInstructions", 26, 2);
    createHTML( "DIV", "beforeEnd", ".titleInstructions", "lineToTitleInstructions", "" );
    createSTYLE("LINE", "lineToTitleInstructions", 50);
       document.querySelector(".titleInstructions").style.margin = "20px";
       document.querySelector(".titleInstructions").style.marginLeft = "29px";
       

    
    createHTML( "DIV", "beforeEnd", ".instructionBox", "subTitles","" );
       alignmentFlex(".subTitles", "flex", "row", "space-between", "center");

    createHTML( "DIV", "beforeEnd", ".subTitles", "titleConstrols","CONTROLS" );
    createSTYLE("TITLE", "titleConstrols", 16, 2);
        document.querySelector(".titleConstrols").style.marginLeft = "30px";

    createHTML( "DIV", "beforeEnd", ".subTitles", "titleObjective","OBJECTIVE" );
    createSTYLE("TITLE", "titleObjective", 16, 2);
        document.querySelector(".titleObjective").style.marginRight = "151px";
    
}



function renderButtonBack(){
    createHTML( "DIV", "beforeEnd", ".instructionBox", "backMenu","back" );
    createSTYLE("BTN", "backMenu", 17, 2, 35, 100);
    document.querySelector(".backMenu").style.margin = "auto";
}

async function listenerClickBtnBack(){
    listenerElement(".backMenu", btnClickedBack);
    let getClickBack = await getClicked();
}

function btnClickedBack(){
    document.querySelector(".backMenu").classList.add("active");    
}

export async function getClicked(){
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



async function renderInformations(theme){
    createHTML( "DIV", "beforeEnd", ".instructionBox", "informations","" );
    document.querySelector(".informations").style.height = "280px";
    document.querySelector(".informations").style.marginTop = "30px";
    document.querySelector(".informations").style.marginBottom = "-30px";
    document.querySelector(".informations").style.marginLeft = "30px";

    document.querySelector(".informations").style.backgroundImage = "url(./../../../imgs/"+theme+"/instructionScreen.png)";

    document.querySelector(".informations").style.backgroundSize = "700px";
    document.querySelector(".informations").style.backgroundRepeat = "no-repeat";
    //renderConstrols();
    //renderObjectives();
}
/*
function renderControls(){
    renderinfoClickLeft();
    renderinfoClickRight();
}
*/