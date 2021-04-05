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

function showModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "block"
}

function showSuccess() {
    let success = document.querySelector(".background2");
    success.style.display = "block";
}

function exit(e) {
    let modal = e.parentElement.parentElement;
    modal.style.display = "none";
    let close = document.getElementById("modal");
    close.style.display = "none"
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
    actualRadio.style.boxShadow = "0 0 0 3px #3cb4ac"
    if(actualRadio.children[1]) {
        actualRadio.children[1].style.display = "flex";
    }   
}

function check(e) {
    let box = e.children[0].children[0].children[0];
    box.checked = true;
    showPledge(box);
}