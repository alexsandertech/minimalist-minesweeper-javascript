export function buttonTemplate(heighty, widthy, typeBtn, text, sizeFont){
    let component  = "<div class='button' ";
        component  += "id='" + text + "' ";
        component +=      "style='background-color: var(--bg-button-type-" + typeBtn +");";
        component +=             'height: ' + heighty +'px;';
        component +=             'width:  ' + widthy  +'px;';
        component +=             'cursor:  pointer;';
        component +=             'margin:  10px;';
        component +=             'border-radius: 5px;';
        component +=             'border: 1px solid var(--line-button-type-' + typeBtn +');';
        
        component +=             'display: flex;';
        component +=             'justify-content: center;';
        component +=             'align-items: center;';

        component +=             "font-family: Rubik Light;";
        component +=             'font-size: '+ sizeFont +'px;';
        component +=             'color: var(--line-button-type-' + typeBtn +');';
        component += "'>" + text + "<div>";
    
    return component;
}