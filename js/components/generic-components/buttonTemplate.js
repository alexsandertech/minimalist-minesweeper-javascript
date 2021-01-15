export function setButtonSTYLE(className, sizeFont, typeBtn, heighty, widthy){
    let element = document.querySelector("." + className);

    element.style.fontSize   = sizeFont + "px";
    element.style.fontFamily = "Rubik Light";
    element.style.color      = 'var(--line-button-type-' + typeBtn +')';
    
    element.style.display        = "flex";
    element.style.justifyContent = "center";
    element.style.alignItems     = "center";

    element.style.backgroundColor = "var(--bg-button-type-" + typeBtn +")";
    element.style.height          = heighty + 'px';
    element.style.width           = widthy + 'px';
    element.style.cursor          = "pointer";
    element.style.margin          = "10px";
    element.style.borderRadius    = "5px";
    element.style.border          = '1px solid var(--line-button-type-' + typeBtn +')';
}