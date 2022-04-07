import React from 'react';

const Todo = props => {
  return (
    <li>
      {props.todo.text}
      <button onClick={() => props.delete(props.todo.id)}>Delete</button>
    </li>
  );
};

export default Todo;