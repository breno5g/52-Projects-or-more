let todoList = [];

function createNewTodo(e) {
  let text = e.parentElement.parentElement.children[1].children[0]
  if (text.value == "") {
    alert("Input is blank")
  } else {
    todoList.push({id: todoList.length, text: text.value})
    text.value = null;
  }
  console.log(todoList)
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