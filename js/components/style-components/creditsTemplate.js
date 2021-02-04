
export function setCreditsSTYLE(className, sizeTexti, spaceLetter, alignSet){
    let element = document.querySelector("." + className);

    element.style.color         = 'var(--font-color-line)';
    element.style.fontFamily    = 'Avenir';
    element.style.fontSize      = sizeTexti +'px';
    element.style.letterSpacing = spaceLetter +'px';
    element.style.textAlign     = alignSet;
}