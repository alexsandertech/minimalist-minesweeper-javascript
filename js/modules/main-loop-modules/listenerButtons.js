import { runClicked } from "./runClicked.js";

export function listenerButtons() {
    console.log(" >> Inicializing listenerButtons");
     
    listenerElement(".btn-back");
    listenerElement(".btn-restart");

    console.log(" >> Finalizing listenerButtons");
}

export function listenerElement(item) {
    document.querySelector(item).addEventListener("click", runClicked);
    document.querySelector(item).addEventListener("contextmenu", runClicked);
}