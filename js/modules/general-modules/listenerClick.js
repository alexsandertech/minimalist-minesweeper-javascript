import { handleClicked } from './handleClicked.js';

export function addListenerClickRIGHT(item) {
    document.querySelector(item).addEventListener("contextmenu", handleClicked);
}

export async function addListenerClickLEFT(item) {
    document.querySelector(item).addEventListener("click", handleClicked);
}

export function removeListenerClickRIGHT(item) {
    document.querySelector(item).removeEventListener("contextmenu", handleClicked);
}

export function removeListenerClickLEFT(item){
    document.querySelector(item).removeEventListener("click", handleClicked);
}