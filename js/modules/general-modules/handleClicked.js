document.onmousedown = handleClicked; 
import { setBack }      from '../main-loop-modules/runLoop.js';
import { setRestart }   from '../main-loop-modules/runLoop.js';
import { revealCell }   from '../main-loop-modules/runLoop.js';
import { flagCell }     from '../main-loop-modules/runLoop.js';

import { setBackEndGame }      from '../final-modules/windowEndGame.js';

import { removeListenerClickRIGHT } from './listenerClick.js';
import { removeListenerClickLEFT }  from './listenerClick.js';

export async function handleClicked(click) {
    
    if(this.className!=undefined) {
        let str = this.className;
        if(click.which == 3 || click.which == 1)
            clickValid(str, click.which);
        
        console.log("  -> "+str+" <- ");
    }
}

function clickValid(str, which){
    if (which == 3)
        handleClickRight(str);
    else
        handleClickLeft(str);
}

async function handleClickRight(str){    
    console.log("  -- RIGHT CLICK -- ");

    if(validateCell(str))
        await setFlagCell(str);
}

async function handleClickLeft(str){
    console.log("  -- LEFT CLICK -- ");
    if(str=="btn-back")
        setBack();
    else if(str=="btn-back-EndGame")
        setBackEndGame();
    else if(str=="btn-restart")
        setRestart();  
    else if(validateCell(str))
        await cellClicked(str);
}


function validateCell(str){
    const regCompare = /cell-/;
    return regCompare.test(str);
}

async function setFlagCell(str){
    let index = getIndex(str);

    await flagCell(index[0], index[1]);
}

//Ex. str: "cell-12-2"
async function cellClicked(str){
    let index = getIndex(str);
    
    await revealCell(index[0], index[1]);
    
    removeListenerClickRIGHT("."+str);
    removeListenerClickLEFT("."+str);
}

function getIndex(str){    
    var numsStr = new RegExp(/(\d+)-(\d+)/, "g");
    let [n, i, j] = numsStr.exec(str);

    i = parseInt(i);
    j = parseInt(j);
    
    return [i, j];
}