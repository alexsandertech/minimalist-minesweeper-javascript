import { home }            from './modules/home.js';
import { inicializeBoard } from './modules/structure.js';
import { mainGameLoop }    from './modules/mainGameLoop.js';
//import { final }           from './modules/final.js';

async function main(){
    document.querySelector("body").style.b
    console.log("Initializing");
    let options, board, result;
    let flag = true;

   // do{
        options = {};
        board   = {};
        result  = {};

        options = await home();
        board   = await inicializeBoard(options.typeBoard, options.difficulty);
        result = await mainGameLoop(board, options);

        //flag = await final(result);
    //}while(flag);
    console.log("Finalizing");
}

main();