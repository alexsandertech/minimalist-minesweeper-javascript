export function listenerButtons() {
    listenerElementId("start");
    listenerElementId("instructions");
    listenerElementId("options");
}

export function buttonClicked(){
    console.log("opa");
}

function listenerElementId(item){
    document.getElementById(item).addEventListener("click", buttonClicked);
}