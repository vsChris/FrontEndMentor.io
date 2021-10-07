const todoList = document.querySelector('.todo-list');
const themeToggle = document.querySelector('.theme-btn');
const todoForm = document.querySelector('.todo-form');
const todoActions = document.querySelectorAll('.action');
const todoListStatus = document.querySelector('.list-status');
const todosLeft = document.querySelector('.todo-counter');
const clearTodo = document.querySelector('.clear-todo-btn');
const state = [];

function handleSubmit(e) {
  e.preventDefault();
  const task = e.srcElement[0].value;
  const todo = {
    task,
    id: Date.now(),
    complete: false,
  };
  e.srcElement[0].value = '';
  state.push(todo);
  console.log(`You now have ${state.length} items in sitting in state`);
  e.target.reset();
  todoList.dispatchEvent(new CustomEvent('stateUpdated'));
}

function displayTodos() {
  const html = state.map(
    (item) => `<li class="todo draggable" data-id="${item.id}" 
                data-complete="${item.complete}">
                <input type="checkbox" class="checkbox" />
                <p class="todo-text"> ${item.task} </p>
                <button class="delete-todo-btn"></button>
                </li>
             `
  );
  todoList.innerHTML = html;
}

function saveToLocalStorage() {
  const stateToString = JSON.stringify(state);
  localStorage.setItem('todos', stateToString);
}

function restoreFromLocalStorage() {
  if (localStorage.length) {
    const restoredItems = JSON.parse(localStorage.getItem('todos'));
    restoredItems.forEach((item) => state.push(item));
    displayTodos();
    updateTodosLeft();
  }
}

function updateTodosLeft() {
  console.log(todosLeft);
}

restoreFromLocalStorage();

todoForm.addEventListener('submit', handleSubmit);
todoList.addEventListener('stateUpdated', displayTodos);
todoList.addEventListener('stateUpdated', saveToLocalStorage);
todoList.addEventListener('stateUpdate', restoreFromLocalStorage);
todoList.addEventListener('stateUpdated', updateTodosLeft);
