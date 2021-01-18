export function createRadioHTML(className, texti){
    let component  = "<input type='radio' name='"+ className+"' value='"+texti+"'/>"+texti;
    return component;
}