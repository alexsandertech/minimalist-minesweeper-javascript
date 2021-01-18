import { createDivHTML } from "./generic-components/createDivHTML.js";
import { createRadioHTML } from "./generic-components/createRadioHTML.js";

export function createHTML(type, local, fatherDiv, className, texti){
    if(type=="DIV")
        document.querySelector(fatherDiv).insertAdjacentHTML(local, createDivHTML(className, texti));
        
    if(type=="RD")
        document.querySelector(fatherDiv).insertAdjacentHTML(local, createRadioHTML(className, texti)); 
}
