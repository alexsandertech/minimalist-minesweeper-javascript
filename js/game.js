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
        board   = inicializeBoard(options.typeBoard, options.difficulty);//Incomplete

        //result = mainGameLoop(board, options);

        //flag = final(result);
    //}while(flag);
}

main();




/*
function setColorMode(){
    document.documentElement.style.setProperty('--bg-color', '#F5F8FA');
    document.documentElement.style.setProperty('--bg-box-color', '#FFF');
    document.documentElement.style.setProperty('--line-box-color', '#2CABFF');
    document.documentElement.style.setProperty('--shadow-box-color', '#AFDFFF');
}*/