import './style.css';

const todoBody = document.querySelector('.todo_main_content');

const todos = [
  {
    id: 1,
    task: 'Do Laundary',
    status: true,
  },
  {
    id: 2,
    task: 'Go shooping',
    status: false,
  },
  {
    id: 3,
    task: 'Clean house',
    status: true,
  },

  {
    id: 3,
    task: 'Clean house',
    status: true,
  },
];

const rendermytodolist = () => {
  if (todos.length > 0) {
    todos.forEach((todo) => {
      const todoList = `<li data-id="${todo.id}" data-status="${todo.status}">
      <label for="${todo.id}">
      <input type="checkbox" id="${todo.id}" value="${todo.id}"
      ${todo.status === 'complete' ? 'true' : false}/>
      <input type="text" value="${todo.task}" readonly />
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