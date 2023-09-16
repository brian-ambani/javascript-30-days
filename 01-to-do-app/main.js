//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Event listers

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


// Functions

function addTodo(event){
    //prevent form from submitting
    event.preventDefault();

    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML= 'D';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML= 'X';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);


    // Append to list
    todoList.appendChild(todoDiv);

    // Clear Todo input value

    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    // DELETE TODO

    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    }


    // CHECK MARK

    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completd");
    }
}