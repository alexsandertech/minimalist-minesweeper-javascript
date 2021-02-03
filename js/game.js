import { home }            from './modules/home.js';
import { inicializeBoard } from './modules/structure.js';
import { mainGameLoop }    from './modules/mainGameLoop.js';
import { final }           from './modules/final.js';

async function main(){
    console.log("Initializing");
    let options, board, result;
    let flag = {returMenu: false, resetCurrentBoard: false};

    options = {};
    do {

        options = await home();
        do {
            result  = [false, null, null];
            board   = {};

            board   = await inicializeBoard(options.typeBoard, options.difficulty);
            result  = await mainGameLoop(board, options);

            flag = await final(result);
        } while(!flag.resetCurrentBoard);

    } while (!flag.returMenu);
    console.log("Finalizing");
}

//Disable right-click
document.oncontextmenu = RightMouseDown;
function RightMouseDown() { return false;}

main();