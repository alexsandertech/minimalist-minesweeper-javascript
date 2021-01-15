export function listenerButtons() {    
    resetListeners();

    listenerElement(".btn-start", btnClickedStart);
    listenerElement(".btn-instructions", btnClickedInstruction);
    listenerElement(".btn-options", btnClickedOptions);
}

function resetListeners(){    
    document.querySelector(".btn-start").classList.remove("active");    
    document.querySelector(".btn-instructions").classList.remove("active");
    document.querySelector(".btn-options").classList.remove("active");
}

function listenerElement(item, func){
    document.querySelector(item).addEventListener("click", func);
}

function btnClickedStart(){
    document.querySelector(".btn-start").classList.add("active");    
    document.querySelector(".btn-instructions").classList.remove("active");
    document.querySelector(".btn-options").classList.remove("active");
}

function btnClickedInstruction(){
    document.querySelector(".btn-instructions").classList.add("active");    
    document.querySelector(".btn-start").classList.remove("active");
    document.querySelector(".btn-options").classList.remove("active");
}

function btnClickedOptions(){
    document.querySelector(".btn-options").classList.add("active");    
    document.querySelector(".btn-instructions").classList.remove("active");
    document.querySelector(".btn-start").classList.remove("active");
}