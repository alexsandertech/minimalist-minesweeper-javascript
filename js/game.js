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

        options = home();//Incomplete
        //board   = inicializeBoard(options.typeBoard, options.difficulty);//Incomplete

        //result = mainGameLoop(board, options);

        //flag = final(result);
    //}while(flag);
}

main();