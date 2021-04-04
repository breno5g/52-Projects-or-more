function modal() {
    let radio = document.querySelector(`[type="radio"]:checked`);
    let box = radio.parentElement.parentElement.parentElement;
    box.style.boxShadow = "0 0 0 3px #3cb4ac"
}

function showPledge(e) {
    let main = e.parentElement.parentElement.parentElement;
    let radio = document.querySelectorAll(`[type="radio"]`);
    for(let i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
            main.style.boxShadow = "0 0 0 3px #3cb4ac"
        } else {
            let c = radio[i].parentElement.parentElement.parentElement;
            c.style.boxShadow = "none"
        }
    }
}