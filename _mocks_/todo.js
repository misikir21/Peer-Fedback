const todos = [];

const addTask = (item) => {
  todos.push(item);
  return todos;
};

const deleteTask = (item) => {
  const newTodos = todos.filter((todo) => todo.id !== item.id);
  newTodos.forEach((todo, id) => { todo.id = id + 1; });
  return newTodos;
};

exports.addTask = addTask;
exports.deleteTask = deleteTask;