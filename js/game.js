import { home }            from './modules/home.js';
import { inicializeBoard } from './modules/structure.js';
import { mainGameLoop }    from './modules/mainGameLoop.js';
import { final }           from './modules/final.js';

async function main(){
    calcWindow();
    console.log("Initializing");
    let options = null;
    let board   = {};
    let result  = [false, null, null];
    let flag    = {returnMenu: false, resetCurrentBoard: false};

    do {
        options = await home(options);

        do {
            result  = [false, null, null];
            board   = {};

            board   = await inicializeBoard(options.typeBoard, options.difficulty);
            result  = await mainGameLoop(board, options);

            flag = await final(result);
        } while(!flag.resetCurrentBoard);

    } while (!flag.returnMenu);
    console.log("Finalizing");
}

//Disable right-click
document.oncontextmenu = RightMouseDown;
function RightMouseDown() { return false;}

function calcWindow(){
    let windowWidth = window.innerWidth;
    let calcZoom = (windowWidth/1366).toFixed(2);
    document.querySelector("body").style.transform = "scale("+calcZoom+")";
}

main();