import { createDivHTML } from "./html-components/createDivHTML.js";
import { createRadioHTML } from "./html-components/createRadioHTML.js";

export function createHTML(type, local, fatherDiv, className, texti){
    if(type=="DIV")
        document.querySelector(fatherDiv).insertAdjacentHTML(local, createDivHTML(className, texti));
        
    if(type=="RD")
        document.querySelector(fatherDiv).insertAdjacentHTML(local, createRadioHTML(className, texti)); 
}
