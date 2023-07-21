import './style.css';

const todoBody = document.querySelector('.todo_main_content');

const todos = [
  {
    index: 1,
    description: 'Do Laundry',
    completed: true,
  },
  {
    index: 2,
    description: 'Go shopping',
    completed: false,
  },
  {
    index: 3,
    description: 'Clean house',
    completed: true,
  },
  {
    index: 4,
    description: 'Walk the dog',
    completed: false,
  },
];

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