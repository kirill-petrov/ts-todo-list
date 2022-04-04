// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import AddingTodo from './AddingTodo';
import Filter from './Filter';

function TodoApp() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return (
    <div>
      <AddingTodo />

      <Filter />

      {1 ? (
        <ul>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {/* {tasks.map((item: any) => (
            <li key={item.id}>{item.text}</li>
          ))} */}
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
