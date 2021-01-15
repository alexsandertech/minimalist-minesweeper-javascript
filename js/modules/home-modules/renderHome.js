import { alignmentFlex }  from '../../components/generic-components/alignmentElement.js';

import { createHTML }  from '../../components/createHTML.js';
import { createSTYLE } from '../../components/createSTYLE.js';

export function renderHome() {
    alignmentFlex("#game", "flex", "column", "space-evenly", "center");
    
    renderTitleGame();
    renderBox();
    renderButtons();
}

function renderTitleGame(){
    createHTML( "DIV", "beforeEnd", "#game", "titleGame","MINESWEEPER" );
    createSTYLE("TITLE", "titleGame", 42, 5);
    createHTML( "DIV", "beforeEnd", ".titleGame", "lineToTitleGame", "" );
    createSTYLE("LINE", "lineToTitleGame", 120);    
    createHTML( "DIV", "beforeEnd", ".titleGame", "creditsCreator",  "AlexsanderTech" );
    createSTYLE("CREDITS", "creditsCreator", 15, 1, "end");
}

function renderBox(){
    createHTML( "DIV", "beforeEnd", "#game", "baseBox", "" );
    createSTYLE("BOX", "baseBox", 300, 370, 1, 7, "var(--bg-box-color)", "var(--line-box-color)");
    alignmentFlex(".baseBox", "flex", "column", "center", "center");
}

function renderButtons(){
    createHTML( "DIV", "beforeEnd", ".baseBox", "button", "start");
    createSTYLE("BTN", "button", 20, 1, 45, 130);
    createHTML( "DIV", "beforeEnd", ".baseBox", "button-1", "instructions");
    createSTYLE("BTN", "button-1", 19, 3, 45, 130);
    createHTML( "DIV", "beforeEnd", ".baseBox", "button-2", "options");
    createSTYLE("BTN", "button-2", 20, 3, 45, 130);
                          // sizeFont, typeBtn, heighty, widthy)
}