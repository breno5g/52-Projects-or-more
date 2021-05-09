let gameTable = document.querySelector(".gameTable");
let paper = 0;
let scissors = 1;
let rock = 2;

let player;

function init(e) {
    clear();
    waitCOM(e);
}

function waitCOM(e) {
    player = e.getAttribute("value");
    gameTable.classList.remove("init");
    gameTable.classList.add("waitCOM");
    let playerBox = document.createElement("div");
    let playerTitle = document.createElement("span");
    playerTitle.innerText = "You picked";
    let playerSelected = document.createElement("span");
    playerSelected.classList.add("btn");
    if (e.getAttribute("value") == paper) {
        playerSelected.classList.add("paper");
        playerSelected.innerHTML = `<img src="Assets/images/icon-paper.svg" alt="paper">`
    } else if (e.getAttribute("value") == scissors) {
        playerSelected.classList.add("scissors");
        playerSelected.innerHTML = `<img src="Assets/images/icon-scissors.svg" alt="scissors">`
    } else {
        playerSelected.classList.add("rock");
        playerSelected.innerHTML = `<img src="Assets/images/icon-rock.svg" alt="rock">`
    }
    playerBox.appendChild(playerTitle);
    playerBox.appendChild(playerSelected);
    let COMBox = document.createElement("div");
    let COMTitle = document.createElement("span");
    let COMSelected = document.createElement("span");
    COMTitle.innerText = "The house picked";
    COMSelected.classList.add("btn");
    COMSelected.classList.add("COM");
    COMBox.appendChild(COMTitle);
    COMBox.appendChild(COMSelected);
    gameTable.appendChild(playerBox);
    gameTable.appendChild(COMBox);
    setTimeout(() => {
        result();
    }, 1500)
}

function result() {
    let COM = Math.floor(Math.random() * 3);
    while (COM == parseInt(player)) {
        COM = Math.floor(Math.random() * 3)
    }
    gameTable.classList.add("COMResponse");
    gameTable.classList.remove("waitCOM");
    changeCOMImage(COM)
    if (player == 0 && COM != 1) {
        console.log("You win");
    } else if (player == 1 && COM != 2) {
        console.log("You win");
    } else if (player == 2 && COM != 0) {
        console.log("You win");
    } else {
        console.log("You lose");
    }
    setTimeout(() => {
        resetGame();
    }, 1000)
}

function changeCOMImage(n) {
    let COM = document.querySelector(".COM");
    COM.innerHTML = "";
    COM.classList.remove("COM");
    if (n == paper) {
        COM.classList.add("paper");
        COM.innerHTML = `<img src="Assets/images/icon-paper.svg" alt="paper">`
    } else if (n == scissors) {
        COM.classList.add("scissors");
        COM.innerHTML = `<img src="Assets/images/icon-scissors.svg" alt="scissors">`
    } else {
        COM.classList.add("rock");
        COM.innerHTML = `<img src="Assets/images/icon-rock.svg" alt="rock">`
    }
}

function resetGame() {
    gameTable.classList.add("end");
    gameTable.classList.remove("COMResponse");
    let box = document.createElement("div");
    box.classList.add("endGame");
    let span = document.createElement("span");
    span.innerText = "You Lose";
    let btn = document.createElement("button");
    btn.innerText = "Play again"
    box.appendChild(span);
    box.appendChild(btn);
    gameTable.children[0].after(box);
}

function clear() {
    gameTable.innerHTML = "";
}