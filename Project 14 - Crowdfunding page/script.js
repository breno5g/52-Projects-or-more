let initialRadio;
let actualRadio;
let allRadio = document.querySelectorAll(`[type="radio"]`);
let resetRadio;

function modal() {
    initialRadio = document.querySelector(`[type="radio"]:checked`);
    let box = initialRadio.parentElement.parentElement.parentElement;
    box.style.boxShadow = "0 0 0 3px #3cb4ac";
    box.children[1].style.display = "flex";
}

function showPledge(e) {
    actualRadio = e.parentElement.parentElement.parentElement;
    allRadio.forEach((e) => {
        resetRadio = e.parentElement.parentElement.parentElement
        resetRadio.style.boxShadow = "0 0 2px 0 #00000042";
        if(resetRadio.children[1]) {
            resetRadio.children[1].style.display = "none";
        }
    });
    if(actualRadio.children[1]) {
        actualRadio.style.boxShadow = "0 0 0 3px #3cb4ac"
        actualRadio.children[1].style.display = "flex";
    }   
}