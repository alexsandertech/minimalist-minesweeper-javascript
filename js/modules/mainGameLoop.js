import { renderMain }      from './main-loop-modules/renderMain.js';

export async function mainGameLoop(board, options){
        console.log("> Initializing MainGameLoop");
        let result = false;
        
        console.log(board);
        await renderMain(board, options);
        /*
        do {
            listenerButtons();
            options = await renderItemsMenu(options);
        } while (!options.start);
    
        document.querySelector("#game").innerHTML = "";
        */
        console.log("< Initializing MainGameLoop");
        return result;
    }