export function setLineSTYLE(classNameLine, sizeLine){
    let line    = document.querySelector("." + classNameLine);

    line.style.backgroundColor = 'var(--font-color-line)';
    line.style.height          = '3px';
    line.style.width           =  sizeLine + 'px';
}
