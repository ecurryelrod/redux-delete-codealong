import uuid from "uuid";

export default function manageTodo(state = {todos: []}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {
        id: uuid(),
        text: action.todo.text
      }
      return { todos: state.todos.concat(todo) };
    case 'DELETE_TODO': return {todos: state.todos.filter(todo => todo.id !== action.todo)}
    default:
      return state;
  }
}
