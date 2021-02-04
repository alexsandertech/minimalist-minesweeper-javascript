import { setTitleSTYLE }   from "./style-components/titleTemplate.js";
import { setLineSTYLE }    from "./style-components/lineTemplate.js";
import { setCreditsSTYLE } from "./style-components/creditsTemplate.js";
import { setBoxSTYLE }     from "./style-components/boxTemplate.js";
import { setButtonSTYLE }  from "./style-components/buttonTemplate.js";
import { setBlurSTYLE }    from "./style-components/modalTemplate.js";

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
    if(type=="MODAL")
        setBlurSTYLE(className);

}