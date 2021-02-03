import { removeListenerElement } from './main-loop-modules/listenerButtons.js';

export async function final(result){

    removeListenerElement(".btn-back");
    removeListenerElement(".btn-restart");
    //".cell-"+i+"-"+j
    document.querySelector("#game").innerHTML = "";

    if(result[1]=="btnRestart")
        return windowRestart();
    else if(result[1]=="btnBack")
        return windowBackMenu();
    else if(result[1]=="defeat")
        return windowEndDefeat();
    else if(result[1]=="victory")
        return windowEndVictory(result[2]);
        
}

function windowRestart(){
    return {returMenu: false, resetCurrentBoard: false};
}

function windowBackMenu(){
    return {returMenu: false, resetCurrentBoard: true};
}

function windowEndDefeat(){    
    return {returMenu: false, resetCurrentBoard: true};
}

function windowEndVictory(time){
    alert("Seu tempo: " + time);

    return {returMenu: false, resetCurrentBoard: true};

}