import { home }            from './modules/home.js';
import { inicializeBoard } from './modules/structure.js';
//import { mainGameLoop }    from './modules/.js';
//import { final }           from './modules/final.js';

function main(){
    let options, board, result;
    let flag = true;

   // do{
        options = {};
        board   = {};
        result  = {};

        options = home();// 20% Completed
        //board   = inicializeBoard(options.typeBoard, options.difficulty);// 33% Completed

        //result = mainGameLoop(board, options); 0%

        //flag = final(result);
    //}while(flag);
}

main();