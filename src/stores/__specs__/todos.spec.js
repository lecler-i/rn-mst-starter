import todos from '../todos';

const testTodo = {
  title: 'test',
};

it('can create new todo', () => {
  expect(todos.todos.length).toBe(0);

  todos.addTodo(testTodo);

  expect(todos.todos.length).toBe(1);
});

it('can toggle and untoggle a todo', () => {
  const todo = todos.addTodo(testTodo);

  todo.toggle();
  expect(todo.completed).toBe(true);

  expect(todos.completedTodos.length).toBe(1);
});

