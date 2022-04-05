import React from 'react';

function TodoItem({ id, text }) {
  return (
    <li key={id}>
      {id} {text}
    </li>
  );
}

export default TodoItem;
