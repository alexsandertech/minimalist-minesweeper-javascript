import { renderHome }      from './home-modules/renderHome.js';
import { listenerButtons } from './home-modules/listenerButtons.js';
import { renderItemsMenu } from './home-modules/renderItemsMenu.js';

export async function home(){
    console.log("> Initializing Home");

    let options = {
        typeBoard  : "T",   // H: Hexagon   | T: Triagle     | S: Square 
        difficulty : "E",   // E: Easy Mode | N: Normal Mode | H: Hard Mode | I:Impossible Mode
        sound      :  1,    // 1: ON        | -1: OFF
        music      :  1,
        theme      : "DARK",
        start      : false
    };//Initializing default options;    
    
    
    renderHome();
    do {
        listenerButtons();
        options = await renderItemsMenu(options);
    } while (!options.start);


    console.log("> Finalizing Home");
    return options;
}
