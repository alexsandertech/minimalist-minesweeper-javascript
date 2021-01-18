export function listenerButtons() {    
    resetListeners();
    //             ---Adding listeners--
    //  In the future when the button is clicked, the second function 
    //  of the parameter below will be triggered, which inserts the 
    //  class ".active" in the button div
    listenerElement(".btn-start", btnClickedStart);
    listenerElement(".btn-instructions", btnClickedInstruction);
    listenerElement(".btn-options", btnClickedOptions);
}

function resetListeners() {    
    document.querySelector(".btn-start").classList.remove("active");    
    document.querySelector(".btn-instructions").classList.remove("active");
    document.querySelector(".btn-options").classList.remove("active");
}

export function listenerElement(item, func) {
    document.querySelector(item).addEventListener("click", func);
}


function btnClickedStart() {
    resetListeners();
    document.querySelector(".btn-start").classList.add("active");    
}

function btnClickedInstruction() {
    resetListeners();
    document.querySelector(".btn-instructions").classList.add("active");    
}

function btnClickedOptions() {
    resetListeners();
    document.querySelector(".btn-options").classList.add("active");    
}