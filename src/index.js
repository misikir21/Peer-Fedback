import './style.css';

const todoBody = document.querySelector('.todo_main_content');

const todos = [];

const renderTodoList = () => {
  const todoListHtml = todos.map((todo) => `
    <li data-index="${todo.index}" data-completed="${todo.completed}">
      <label>
        <input type="checkbox" ${todo.completed ? 'checked' : ''} />
        <span>${todo.description}</span>
      </label>
      <button class="js-delete">
        <i class="ri-delete-bin-fill"></i>
      </button>
    </li>
  `).join('');

  todoBody.querySelector('.js-todo-list').innerHTML = todoListHtml;
};

renderTodoList();