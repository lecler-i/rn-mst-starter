import {types} from 'mobx-state-tree';

export const Todo = types.model({
  title: types.string,
  completed: types.optional(types.boolean, false)
})
  .actions(self => {
    return {
      toggle() {
        self.completed = !self.completed;
      }
    };
  });

export const TodoStore = types
  .model('TodoStore', {
    loaded: types.boolean,
    todos: types.array(Todo)
  })
  .views(self => {
    return {
      get completedTodos() {
        return self.todos.filter(t => t.completed);
      }
    };
  })
  .actions(self => {
    return {
      addTodo(attr) {
        const todo = Todo.create(attr);
        self.todos.push(todo);
        return todo;
      }
    };
  });

export default TodoStore.create({
  loaded: false,
  todos: []
});
