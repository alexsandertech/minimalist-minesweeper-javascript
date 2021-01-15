import { renderHome }      from './home-modules/renderHome.js';
//import { listenerButtons } from './home-modules/listenerButtons.js';

export function home(){
    console.log("> Initializing Home");

    let flag = true;
    let options = {
        typeBoard  : "T",   // H: Hexagon   | T: Triagle     | S: Square 
        difficulty : "E",   // E: Easy Mode | N: Normal Mode | H: Hard Mode | I:Impossible Mode
        sound      :  1,    // 1: ON        | -1: OFF
        music      :  1,
        theme      : "DARK"
    };//Initializing default options;    
    
    
    //do{
        renderHome();
        //button = listenerButtons();
        //flag = renderClicked(button);
        //flag = 
    //}while(flag);

    console.log("> Finalizing Home");
    return options;
}
