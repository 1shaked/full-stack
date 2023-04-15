
let createBtn = document.getElementById('createBtn');
let todoList  = document.getElementById('todoList');
let inputTodo = document.getElementById('inputTodo');
function addTodoToList() {
    // console.log('addTodoToList');
    let todoItemNew = document.createElement('div');
    
    todoItemNew.textContent = inputTodo.value
    todoList.appendChild(todoItemNew);
    inputTodo.value = '';
}

createBtn.addEventListener('click', addTodoToList);

