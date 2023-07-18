import './style.css';

const tasks = [
  { description: 'Buy groceries', completed: false, index: 0 },
  { description: 'Do laundry', completed: true, index: 1 },
  { description: 'Clean room', completed: false, index: 2 },
];

function renderTasks() {
  const list = document.getElementById('task-list');

  list.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${task.description} - ${task.completed ? 'Completed' : 'Not completed'}`;
    list.appendChild(listItem);
  });
}

window.onload = renderTasks;