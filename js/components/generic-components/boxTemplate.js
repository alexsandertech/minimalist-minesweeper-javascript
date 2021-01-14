export function setBoxSTYLE(className, heighty, widthy, borderWeight, borderRadius, colorBackground, colorBorder){
    let element = document.querySelector("." + className);

    element.style.height       = heighty + 'px';
    element.style.width        = widthy + 'px';
    element.style.border       = borderWeight + 'px solid ' + colorBorder;
    element.style.borderRadius = borderRadius + "px";
    element.style.boxShadow    = "0px 0px 20px var(--shadow-box-color)";
    element.style.backgroundColor = colorBackground;
}

/*
export function baseBox(heighty, widthy){
    let component  = "<div class='baseBox' ";
        component +=      "style='background-color: var(--bg-box-color);";
        component +=             'height: ' + heighty +'px;';
        component +=             'width:  ' + widthy  +'px;';
        component +=             'border-radius: 10px;';
        component +=             'border: 1px solid var(--line-box-color);';
        component +=             'box-shadow: 0px 0px 20px var(--shadow-box-color);';
        component += "'> <div>";
    
    return component;
}*/