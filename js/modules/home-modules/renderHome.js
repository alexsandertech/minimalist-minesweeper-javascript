/*import { setTitleSTYLE }    from '../../components/generic-components/titleTemplate.js';
import { setCreditsSTYLE }  from '../../components/generic-components/titleTemplate.js';

import { setBoxSTYLE }      from '../../components/generic-components/boxTemplate.js';
import { buttonTemplate } from '../../components/generic-components/buttonTemplate.js';
import { alignmentFlex }  from '../../components/generic-components/alignmentElement.js';
*/
import { createHTML }  from '../../components/createHTML.js';
import { setSTYLE }    from '../../components/createHTML.js';



export function renderHome() {
    renderTitleGame();
    /*renderBoxHome();
    renderButtonsHome();*/
}

function renderTitleGame(){

    createHTML( "DIV", "beforeEnd", "#game",      "titleGame",       "MINESWEEPER" );
    createHTML( "DIV", "beforeEnd", ".titleGame", "lineToTitleGame", "" );
    createHTML( "DIV", "beforeEnd", ".titleGame", "creditsCreator",  "AlexsanderTech" );

    setSTYLE("TEXT", ".titleGame", );

/*
    createSTYLE()

    alignElement();

    setTitleSTYLE("titleGame", 40, 10, "lineToTitleGame", 100);
    setCreditsSTYLE("creditsCreator", 18, 1, "end");


    el("#game").insertAdjacentHTML("beforeEnd", createDivHTML("titleGame", "MINESWEEPER")); 
    el(".titleGame").insertAdjacentHTML("beforeEnd", createDivHTML("lineToTitleGame", ""));
    el(".titleGame").insertAdjacentHTML("beforeEnd", createDivHTML("creditsCreator", "AlexsanderTech"));    
   */ 


    //alignmentFlex("#game", "flex", "column", "space-evenly", "center");
}




















function renderBoxHome(){
    el("#game").insertAdjacentHTML("beforeEnd", createDivHTML("baseBox", ""));
    
    setBoxSTYLE("baseBox", 300, 400, 2, 13,"var(--bg-box-color)", "var(--line-box-color)");
      
    alignmentFlex(".baseBox", "flex", "column", "center", "center");
}

function renderButtonsHome(){
    el(".baseBox").insertAdjacentHTML ("beforeEnd", buttonTemplate(40, 140, 1, "start", 20));
    el(".baseBox").insertAdjacentHTML ("beforeEnd", buttonTemplate(40, 140, 3, "instructions", 19));
    el(".baseBox").insertAdjacentHTML ("beforeEnd", buttonTemplate(40, 140, 3, "options", 20));
}