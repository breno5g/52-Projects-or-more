let todoList = [
  {id: 0, text: "primeiro"},
  {id: 1, text: "segundo"},
  {id: 2, text: "terceiro"},
  {id: 4, text: "Sem Paciencia mermão"},
  {id: 5, text: "Sem Paciencia mermão"},
  {id: 6, text: "Sem Paciencia mermão"},
  {id: 7, text: "Sem Paciencia mermão"},
];

let todoContainer = document.querySelector(".todos");

function createNewTodo(e) {
  let text = e.parentElement.parentElement.children[1].children[0]
  if (text.value == "") {
    alert("Input is blank")
  } else {
    todoList.push({id: todoList.length, text: text.value})
    text.value = null;
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
      loadTodo();
    }
  }
}


function loadTodo() {
  clearList();
  createElements();
  itemsLeft();
}

function check(e) {
  let checkbox = e.parentElement.children[0];
  let text = e.parentElement.parentElement.children[1].children[0]
  if (checkbox.checked == true) {
    checkbox.checked = false;
    text.style.textDecoration = "none";
    text.style.color = "#cacde8";
  } else {
    checkbox.checked = true;
    text.style.color = "#4d5066";
    text.style.textDecoration = "line-through";
  }
}

function itemsLeft() {
  let span = document.querySelector(".counter").children[0];
  span.innerText = `${todoList.length} items left`
  
}

window.addEventListener("load", loadTodo());