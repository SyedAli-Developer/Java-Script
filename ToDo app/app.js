let input = document.querySelector("#input");
let ul = document.querySelector("#list");
let todo = [];

let i;
function addition() {
  if (input.value === "" || input.value.trim() === "") {
    alert("Please enter a todo item!");
    return;
  }
  todo.push(input.value);
  renderTodo();
  input.value = "";
}

function renderTodo() {
  ul.innerHTML = "";
  for (i = 0; i < todo.length; i++) {
    ul.innerHTML += `
        <li>
         <span class="todo-text">${todo[i]}</span>
         <div class="buttons">
          <button onclick="remove(${i})">Delete</button>
          <button onclick="edit(${i})">Edit</button>
         </div>
        </li>`;
  }
}

function remove(index) {
  todo.splice(index, 1);

  renderTodo();
}
function edit(index) {
  let newValue = prompt("Enter your new todo");
  
  
  if (newValue !== null && newValue.trim() !== "") {
    todo[index] = newValue.trim();
    renderTodo();
  } else {
    
    alert("Edit cancelled or no value entered.");
    
  }
}
