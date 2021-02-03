import { removeListenerElement }    from './main-loop-modules/listenerButtons.js';
import { windowEndGame }            from './final-modules/windowEndGame.js'

export async function final(result){

    removeListenerElement(".btn-back");
    removeListenerElement(".btn-restart");
    //".cell-"+i+"-"+j-> not reseted

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
    document.querySelector("#game").innerHTML = "";
    return {returMenu: false, resetCurrentBoard: false};
}

function windowBackMenu(){
    document.querySelector("#game").innerHTML = "";
    return {returMenu: false, resetCurrentBoard: true};
}

async function windowEndDefeat(){
    await windowEndGame(null); 
    document.querySelector("#game").innerHTML = "";
    return {returMenu: false, resetCurrentBoard: true};
}

async function windowEndVictory(time){
    await windowEndGame(time);    
    document.querySelector("#game").innerHTML = "";
    return {returMenu: false, resetCurrentBoard: true};

}