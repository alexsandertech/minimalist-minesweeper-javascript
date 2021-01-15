import { setTitleSTYLE }   from "./generic-components/titleTemplate.js"
import { setLineSTYLE }    from "./generic-components/titleTemplate.js"
import { setCreditsSTYLE } from "./generic-components/titleTemplate.js"

import { setBoxSTYLE }     from "./generic-components/boxTemplate.js"
import { setButtonSTYLE }  from "./generic-components/buttonTemplate.js"

export function createSTYLE(type, className, ...attributes){
    if(type=="TITLE")    
        setTitleSTYLE(className, attributes[0], attributes[1]);
    if(type=="LINE")
        setLineSTYLE(className, attributes[0]);
    if(type=="CREDITS")
        setCreditsSTYLE(className, attributes[0], attributes[1], attributes[2]);

    if(type=="BOX")
        setBoxSTYLE(className, attributes[0], attributes[1], attributes[2], attributes[3], attributes[4], attributes[5]);

    if(type=="BTN")
        setButtonSTYLE(className, attributes[0], attributes[1], attributes[2], attributes[3]);

}