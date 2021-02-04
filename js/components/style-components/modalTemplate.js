export function setBlurSTYLE(className){
    let element = document.querySelector("." + className);
    
    element.style.backgroundColor = "rgba(33,33,46,.01)";
    element.style.height          = '100%';
    element.style.width           = '100%';
    element.style.position        = 'fixed';
    element.style.backdropFilter  = "blur(3px)";
    element.style.zIndex          = "2";
}