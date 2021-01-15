export function setBoxSTYLE(className, heighty, widthy, borderWeight, borderRadius, colorBackground, colorBorder){
    let element = document.querySelector("." + className);

    element.style.height       = heighty + 'px';
    element.style.width        = widthy + 'px';
    element.style.border       = borderWeight + 'px solid ' + colorBorder;
    element.style.borderRadius = borderRadius + "px";
    element.style.boxShadow    = "0px 0px 20px var(--shadow-box-color)";
    element.style.backgroundColor = colorBackground;
}