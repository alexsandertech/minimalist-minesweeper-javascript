document.onmousedown = runClicked; 
import { setBack }      from './runLoop.js';
import { setRestart }   from './runLoop.js';
import { revealCell }   from './runLoop.js';

export async function runClicked(e) {
    console.log("  >> Inicializing runClicked: "+this.className);

    let str = this.className;
    if(str!=undefined) {
        if (e.which == 3) {
            console.log("Clique Direito");
        } else if (e.which == 1) {
            if(str=="btn-back")
                setBack();
            else if(str=="btn-restart")
                setRestart();                
            else if(validateCell(str))
                await cellClicked(str);
        }
    }
    console.log("  >> Finalizing runClicked");
}   

function validateCell(str){
    const regCompare = /cell-/;
    return regCompare.test(str);
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