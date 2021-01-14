import { createDivHTML } from "./generic-components/createDivHTML.js";

export function createHTML(type, local, fatherDiv, className, texti){
    if(type=="DIV")
        document.querySelector(fatherDiv).insertAdjacentHTML(local, createDivHTML(className, texti)); 
}
