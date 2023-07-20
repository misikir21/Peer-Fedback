import './style.css';

const todoBody = document.querySelector('.todo_main_content');

const todos = [
  {
    index: 1,
    description: 'Do Laundary',
    completed: true,
  },
  {
    index: 2,
    description: 'Go shooping',
    completed: false,
  },
  {
    index: 3,
    description: 'Clean house',
    completed: true,
  },

  {
    index: 3,
    description: 'Clean house',
    completed: true,
  },
];

const rendermytodolist = () => {
  if (todos.length > 0) {
    todos.forEach((todo) => {
      const todoList = `<li data-index="${todo.index}" data-completed ="${todo.completed}">
      <label for="${todo.index}">
      <input type="checkbox" index="${todo.index}" value="${todo.index}"
      ${todo.completed === 'complete' ? 'true' : false}/>
      <input type="text" value="${todo.description}" readonly />
      </label>
          <div class="action">
          <button class="js-delete">
              <i class="ri-delete-bin-fill"></i>
          </button>
          </div> 
      </li>`;
      todoBody.querySelector('.js-todo-list').innerHTML += todoList;
    });
  }
};

rendermytodolist();