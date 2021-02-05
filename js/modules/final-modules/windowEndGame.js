import { createHTML }       from '../../components/createHTML.js';
import { createSTYLE }      from '../../components/createSTYLE.js';
import { alignmentFlex }    from '../../components/alignmentElement.js';
import { sleep }            from "./../general-modules/sleep.js";

import { addListenerClickLEFT }     from "../general-modules/listenerClick.js";
import { removeListenerClickLEFT }  from "../general-modules/listenerClick.js";
import { getStrTime }       from '../general-modules/strTime.js'

var backMenu;

export async function windowEndGame(time){
    backMenu = false;

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
    createHTML( "DIV", "beforeEnd", ".endGameBox", "btn-back-EndGame","menu" );
    
    if(time!=null)
        createSTYLE("BTN", "btn-back-EndGame", 17, 1, 35, 100);
    else
        createSTYLE("BTN", "btn-back-EndGame", 17, 2, 35, 100);

    document.querySelector(".btn-back-EndGame").style.marginBottom = "30px";
}

async function listenerClickBtnBack(){
    await addListenerClickLEFT('.btn-back-EndGame');
    await getBackEndGame();
    removeListenerClickLEFT(".btn-back-EndGame");
}

export async function setBackEndGame(){
    backMenu = true;
}

async function getBackEndGame(){
    do{
        await sleep(500);
    }while(!backMenu);
}