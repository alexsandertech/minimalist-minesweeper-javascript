import { createHTML }       from '../../components/createHTML.js';
import { createSTYLE }      from '../../components/createSTYLE.js';
import { alignmentFlex }    from '../../components/generic-components/alignmentElement.js';

import { listenerElement }  from "../home-modules/listenerButtons.js";
import { getStrTime }       from '../main-loop-modules/renderMain.js'

export async function windowEndGame(time){
    let theme = window.getComputedStyle(document.body).getPropertyValue('--bg-box-color')=='#212325'? "DARK" : "LIGHT";

    renderBox();
    renderMsg(time);
    renderButtonBack(time);

    await listenerClickBtnBack();
    removeRender();

    return;
}

function removeRender(){
    document.querySelector(".endGame").remove();
}


function renderBox(){    
    createHTML( "DIV", "afterend", "#game", "endGame", "" );
    createSTYLE("MODAL", "endGame");
    createHTML( "DIV", "beforeEnd", ".endGame", "endGameBox", "" );
    createSTYLE("BOX", "endGameBox", 230, 400, 1, 7, "var(--bg-box-color)", "var(--line-box-color)");
    alignmentFlex(".endGame", "flex", "row", "center", "center");
    alignmentFlex(".endGameBox", "flex", "column", "space-between", "center");
        document.querySelector(".endGameBox").style.marginTop = "15px";
        document.querySelector(".endGameBox").style.animation = "animationArise 1s";
}

function renderMsg(time){
    if(time!=null)
        win(time);
    else
        lose();
}

function win(time){
    createHTML( "DIV", "beforeEnd", ".endGameBox", "msg","YOU WIN!" );
    createSTYLE("TITLE", "msg", 40, 3);
    document.querySelector(".msg").style.fontWeight = "200";
    document.querySelector(".msg").style.marginTop = "20px";

    createHTML( "DIV", "beforeEnd", ".msg", "time", "Your time: "+getStrTime(time) );
    createSTYLE("TITLE", "time", 20, 3);
    document.querySelector(".time").style.marginTop = "30px";
    document.querySelector(".msg").style.display = "flex";
    document.querySelector(".msg").style.flexDirection = "column";
    document.querySelector(".msg").style.alignItems = "center";
}

function lose(){
    createHTML( "DIV", "beforeEnd", ".endGameBox", "msg","YOU LOSE!" );
    createSTYLE("TITLE", "msg", 40, 2);
    
    document.querySelector(".msg").style.color = "#823738";
    document.querySelector(".msg").style.fontWeight = "200";
    document.querySelector(".msg").style.marginTop = "20px";
}

function renderButtonBack(time){
    createHTML( "DIV", "beforeEnd", ".endGameBox", "backToMenu","menu" );
    
    if(time!=null)
        createSTYLE("BTN", "backToMenu", 17, 1, 35, 100);
    else
        createSTYLE("BTN", "backToMenu", 17, 2, 35, 100);

    document.querySelector(".backToMenu").style.marginBottom = "30px";

    //document.querySelector(".backToMenu").style.margin = "auto";
}

async function listenerClickBtnBack(){
    listenerElement(".backToMenu", btnClickedBack);
    await getClicked();
}

function btnClickedBack(){
    document.querySelector(".backToMenu").classList.add("active");    
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
    return document.querySelector(".backToMenu").classList.contains("active");
}
