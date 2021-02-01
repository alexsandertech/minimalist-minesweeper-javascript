import { home }            from './modules/home.js';
import { inicializeBoard } from './modules/structure.js';
//import { mainGameLoop }    from './modules/.js';
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

        options = await home();// 70% Completed
        board   = await inicializeBoard(options.typeBoard, options.difficulty);// Completed
        console.log(board);
        //result = await mainGameLoop(board, options); 0%

        //flag = await final(result);
    //}while(flag);
    console.log("Finalizing");
}

main();