let todoList = [];
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
  console.log(todoContainer)
  for(let i = 0; i < todoList.length; i++) {
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


function loadTodo() {
  clearList();
  createElements();
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