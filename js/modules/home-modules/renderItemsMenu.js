import { renderInstructions } from "./menu-modules/renderInstructions.js";
import { renderOptions }      from "./menu-modules/renderOptions.js";

export async function renderItemsMenu(options){
    let selectedMenu = await getClicked();
    
    if(selectedMenu == ".btn-start")
        options.start = true;    
    else if(selectedMenu == ".btn-instructions")
        await renderInstructions();        
    else if(selectedMenu == ".btn-options")
        await renderOptions();   

    console.log(selectedMenu);
    return options;
}   

export async function getClicked(){
    let flag = false;
    do{
        await sleep(1000);
        flag = returnActive();
    }while(flag==true);
    
    return flag;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function returnActive(){
    if(checkActive(".btn-start"))
        return ".btn-start";
    if(checkActive(".btn-instructions"))
        return ".btn-instructions";
    if(checkActive(".btn-options"))
        return ".btn-options";

    return true;
}

function checkActive(item){
    return document.querySelector(item).classList.contains("active");
}