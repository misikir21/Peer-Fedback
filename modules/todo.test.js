const { addTask, deleteTask } = require('../_mocks_/todo.js');

describe('two functions to be tested i.e addtask and deletetask', () => {
  test('the user add a new to do task then the list is not empty at this stage', () => {
    const newItem = addTask(
      {
        task: 'Add todo tittle',
        id: 1,
        status: false,
      },
    );
    expect(newItem).not.toBe([]);
  });
  test('the user add a new to do task then the list is not empty at this stage', () => {
    const newItem = addTask(
      {
        task: 'Test Task 2',
        id: 2,
        status: false,
      },
    );
    expect(newItem).not.toBe([]);
  });
  test('as the user delete the task the task  no longer avaliable', () => {
    expect(deleteTask({
      task: 'Delete the todo from the list',
      id: 1,
      status: false,
    })).not.toStrictEqual([]);
  });
  test('as the user delete the task the task  no longer avaliable', () => {
    expect(deleteTask({
      task: 'Delete Task 1',
      id: 1,
      status: true,
    })).toStrictEqual([]);
  });
});