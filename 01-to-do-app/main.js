//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Event listers

todoButton.addEventListener('click', addTodo);


// Functions

function addTodo(event){
    //prevent form from submitting
    event.preventDefault();


    console.log('Hello');
}