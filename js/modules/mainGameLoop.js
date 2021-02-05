import { renderMain }            from './main-loop-modules/renderMain.js';
import { addListenerButtons }    from './main-loop-modules/listenerButtons.js';
import { removeListenerButtons } from './main-loop-modules/listenerButtons.js';
import { runLoop }               from './main-loop-modules/runLoop.js';

export async function mainGameLoop(board, options){
        console.log("> Initializing MainGameLoop");
        
        let result = [false, null, null];

        await renderMain(board, options, 0);        
        await addListenerButtons(board);

        result = await runLoop(board);

        removeListenerButtons(board);
        console.log("< Finalizing MainGameLoop");
        return result;
}

