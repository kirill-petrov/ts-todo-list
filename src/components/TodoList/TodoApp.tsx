// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';

import AddingTodo from './AddingTodo';
import Filter from './Filter';
import TodoItem from './TodoItem';

function TodoApp() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const todoList = useSelector((state) => state.todo);

  return (
    <div>
      <AddingTodo />

      <Filter />

      {todoList.length ? (
        <ul>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {todoList.map((item: any) => (
            <TodoItem
              key={item.id}
              text={item.text}
            />
          ))}
        </ul>
      ) : (
        <p>Задач нет</p>
      )}

      <ul>
        {/* <ol>записывать значение из inboxTask в tasks</ol> */}
        {/* <ol>выводить элементы задач</ol> */}
        {/* <ol>выводить элементы задач</ol> */}
      </ul>
    </div>
  );
}

export default TodoApp;
