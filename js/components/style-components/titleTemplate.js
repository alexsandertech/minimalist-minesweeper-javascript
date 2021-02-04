export function setTitleSTYLE(classNameTitle, sizeTexti, spaceLetter){
    let element = document.querySelector("." + classNameTitle);

    element.style.color         = 'var(--font-color-title)';
    element.style.fontFamily    = 'Avenir';
    element.style.fontSize      = sizeTexti +'px';
    element.style.letterSpacing = spaceLetter +'px';
}