export function createRadioHTML(className, texti){
    let component = "<div class=class"+texti+">";
        component  += "<input type='radio' id='"+texti+"'name='"+ className+"' value='"+texti+"'/><br/>";
        component += "<label id=label"+texti+" for="+texti+">"+texti+"</label></div>";
        
    return component;
}