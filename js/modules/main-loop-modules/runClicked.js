document.onmousedown = runClicked; 
import { setBack }      from './runLoop.js';
import { setRestart }   from './runLoop.js';
import { revealCell }   from './runLoop.js';
import { flagCell }     from './runLoop.js';

export async function runClicked(e) {
    let str = this.className;
    if(str!=undefined) {
        console.log("  -> runClicked: " + str);

        if (e.which == 3) {
            if(validateCell(str))
                await setFlagCell(str);
        } else if (e.which == 1) {
            if(str=="btn-back")
                setBack();
            else if(str=="btn-restart")
                setRestart();                
            else if(validateCell(str))
                await cellClicked(str);
        }
    }
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
}

function getIndex(str){    
    var numsStr = new RegExp(/(\d+)-(\d+)/, "g");
    let [n, i, j] = numsStr.exec(str);

    i = parseInt(i);
    j = parseInt(j);
    
    return [i, j];
}