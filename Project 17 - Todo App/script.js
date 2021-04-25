let todoList = [];
let todoContainer = document.querySelector(".todos");
let sortMode = "all";


function createNewTodo(e) {
  let text = e.parentElement.parentElement.children[1].children[0]
  if (text.value == "") {
    alert("Input is blank")
  } else {
    todoList.push({id: todoList.length, text: text.value})
    text.value = null;
    saveList();
    loadTodo();
  }
}

function createElements() {
  for(let i = todoList.length - 1; i >= 0; i--) {
    let todo = document.createElement("div");
    todo.classList.add("todo");
    todo.setAttribute("id", `${todoList[i].id}`)
    let leftSide = document.createElement("div");
    leftSide.classList.add("left-side");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "check");
    let label = document.createElement("label");
    label.setAttribute("for", "check");
    label.setAttribute("onclick", "check(this)");
    let rightSide = document.createElement("div");
    rightSide.classList.add("right-side");
    let span = document.createElement("span");
    span.setAttribute("onclick", "check(this)")
    span.innerText = todoList[i].text;
    leftSide.appendChild(checkbox);
    leftSide.appendChild(label);
    rightSide.appendChild(span);
    todo.appendChild(leftSide);
    todo.appendChild(rightSide);
    todoContainer.appendChild(todo);
  }
}

function clearList() {
  todoContainer.innerHTML = null;
}

function clearCompleted() {
  let checkbox = document.querySelectorAll(`[type = "checkbox"]`);
  for(let i = 0; i < checkbox.length; i++) {
    let todo = checkbox[i].parentElement.parentElement;
    if (checkbox[i].checked) {
      todoList.splice(todo.getAttribute("id"), 1);
      for (let i = 0; i < todoList.length; i++) {
        todoList[i].id = i
      }
      saveList();
      loadTodo();
    }
  }
}


function loadTodo() {
  if (localStorage.getItem("todoList") != null) {
    todoList = JSON.parse(localStorage.getItem("todoList"));
  }
  clearList();
  createElements();
  itemsLeft();
}

function check(e) {
  let todo = e.parentElement.parentElement
  let checkbox = todo.children[0].children[0];
  let text = todo.children[1].children[0];
  if (checkbox.checked == true) {
    checkbox.checked = false;
    text.style.textDecoration = "none";
    text.style.color = "#777a92";
  } else {
    checkbox.checked = true;
    text.style.color = "#4d5066";
    text.style.textDecoration = "line-through";
  }
  if (sortMode == "all") {
    sortAll();
  } else if (sortMode == "active") {
    sortActive();
  } else if (sortMode == "completed"){
    sortCompleted();
  }
  itemsLeft()
}

function itemsLeft() {
  let span = document.querySelector(".counter").children[0];
  let items = document.querySelectorAll(`[type = "checkbox"]:not(:checked)`);
  span.innerText = `${items.length} items left`
}

function saveList() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function changeTheme(e) {
  if (e.getAttribute("theme") == "dark") {
    document.documentElement.style.setProperty('--bg', '#fafafa');
    document.documentElement.style.setProperty('--cardbg', '#e4e5f1');
    document.documentElement.style.setProperty('--text', '	#d2d3db');
    document.documentElement.style.setProperty('--lighttext', '	#9394a5');
    document.documentElement.style.setProperty('--lighttext', '#484b6a');
    e.setAttribute("theme", "light");
    e.children[0].setAttribute("src", "./assets/images/icon-moon.svg");
  } else {
    document.documentElement.style.setProperty('--bg', '#161722');
    document.documentElement.style.setProperty('--cardbg', '#25273c');
    document.documentElement.style.setProperty('--text', '#cacde8');
    document.documentElement.style.setProperty('--lighttext', '#777a92');
    document.documentElement.style.setProperty('--darktext', '#4d5066');
    e.setAttribute("theme", "dark");
    e.children[0].setAttribute("src", "./assets/images/icon-sun.svg");

  }
}

function sortAll() {
  for(let i = 0; i < todoContainer.children.length; i++) {
      todoContainer.children[i].style.display = "grid"
  }
  sortMode = "all";
  sortBtnColor(document.getElementById("all"));
}

function sortActive() {
  for(let i = 0; i < todoContainer.children.length; i++) {
    let todo = todoContainer.children[i].children[0].children[0];
    if (todo.checked == true) {
      todoContainer.children[i].style.display = "none"
    } else {
      todoContainer.children[i].style.display = "grid"
    }
  }
  sortMode = "active";
  sortBtnColor(document.getElementById("active"));
}

function sortCompleted() {
  for(let i = 0; i < todoContainer.children.length; i++) {
    let todo = todoContainer.children[i].children[0].children[0];
    if (todo.checked != true) {
      todoContainer.children[i].style.display = "none"
    } else {
      todoContainer.children[i].style.display = "grid"
    }
  }
  sortMode = "completed";
  sortBtnColor(document.getElementById("completed"));
}

function sortBtnColor(btn) {
  let div = document.querySelector(".filters");
  for (let i = 0; i < div.children.length; i++) {
    div.children[i].style.color = "var(--lighttext)"
  }

  btn.style.color = "#3a7bfd";
}

window.addEventListener("load", loadTodo());