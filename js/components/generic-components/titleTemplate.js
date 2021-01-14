export function setTitleSTYLE(classNameTitle, sizeTexti, spaceLetter, classNameLine, sizeLine){
    let element = document.querySelector("." + classNameTitle);
    let line    = document.querySelector("." + classNameLine);

    element.style.color         = 'var(--font-color-title)';
    element.style.fontFamily    = 'Avenir';
    element.style.fontSize      = sizeTexti +'px';
    element.style.letterSpacing = spaceLetter +'px';

    line.style.backgroundColor = 'var(--font-color-line)';
    line.style.height          = '3px';
    line.style.width           =  sizeLine + 'px';
}

export function setCreditsSTYLE(className, sizeTexti, spaceLetter, alignSet){
    let element = document.querySelector("." + className);

    element.style.color         = 'var(--font-color-line)';
    element.style.fontFamily    = 'Avenir';
    element.style.fontSize      = sizeTexti +'px';
    element.style.letterSpacing = spaceLetter +'px';
    element.style.textAlign     = alignSet;
}