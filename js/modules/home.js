import { renderHome }      from './home-modules/renderHome.js';
import { listenerButtons } from './home-modules/listenerButtons.js';
import { renderItemsMenu } from './home-modules/renderItemsMenu.js';

export async function home(){
    console.log("> Initializing Home");

    let options = {
        typeBoard  : "H",   // H: Hexagon   | T: Triagle     | S: Square 
        difficulty : "E",   // E: Easy Mode | N: Normal Mode | H: Hard Mode | I:Impossible Mode
        theme      : "DARK",//LIGHT
        start      : false
    };//Initializing default options;    
        
    renderHome();
    do {
        listenerButtons();
        options = await renderItemsMenu(options);
    } while (!options.start);

    document.querySelector("#game").innerHTML = "";
    
    console.log("< Finalizing Home");
    return options;
}

export function setColorMode(){
    /*toggles the theme color when called */
    
    if(window.getComputedStyle(document.body).getPropertyValue('--bg-box-color')=='#212325'){
        document.documentElement.style.setProperty('--bg-color', '#F5F8FA');

        document.documentElement.style.setProperty('--bg-box-color', '#FFF');
        document.documentElement.style.setProperty('--line-box-color', '#2CABFF');
        document.documentElement.style.setProperty('--shadow-box-color', '#AFDFFF');
        
        document.documentElement.style.setProperty('--shadow-box-color-btn', '#2CABFF');

        document.documentElement.style.setProperty('--font-color-title', '#0093FF');
        document.documentElement.style.setProperty('--font-color-line', '#0093FF');

        document.documentElement.style.setProperty('--bg-button-type-1', '#E0F3FF');
        document.documentElement.style.setProperty('--line-button-type-1', '#2CABFF');
        
        document.documentElement.style.setProperty('--bg-button-type-2', '#E8D9D9');
        document.documentElement.style.setProperty('--line-button-type-2', '#D25353');

        document.documentElement.style.setProperty('--bg-button-type-3', '#FFF');
        document.documentElement.style.setProperty('--line-button-type-3', '#36677F');
        

    } else {
        document.documentElement.style.setProperty('--bg-color', '#212325');

        document.documentElement.style.setProperty('--bg-box-color', '#212325');
        document.documentElement.style.setProperty('--line-box-color', '#4B4C4D');
        document.documentElement.style.setProperty('--shadow-box-color', '#17181a');

        document.documentElement.style.setProperty('--shadow-box-color-btn', '#0f1011');

        document.documentElement.style.setProperty('--font-color-title', '#FFF');
        document.documentElement.style.setProperty('--font-color-line', '#3D4042');

        document.documentElement.style.setProperty('--bg-button-type-1', '#252F35');
        document.documentElement.style.setProperty('--line-button-type-1', '#3C677F');
        
        document.documentElement.style.setProperty('--bg-button-type-2', '#322628');
        document.documentElement.style.setProperty('--line-button-type-2', '#823738');
        
        document.documentElement.style.setProperty('--bg-button-type-3', '#212325');
        document.documentElement.style.setProperty('--line-button-type-3', '#535455');
    }
}