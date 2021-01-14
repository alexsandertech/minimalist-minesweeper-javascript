export function alignmentFlex(element, displaySelected, orientation, i, j){
    document.querySelector(element).style.display = displaySelected;
    document.querySelector(element).style.flexDirection = orientation;
    document.querySelector(element).style.justifyContent = i;
    document.querySelector(element).style.alignItems = j;
}
