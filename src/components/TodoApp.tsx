// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTasks([
      // ...tasks,
      // {
      //   id: tasks.length + 1,
      //   task: e.target.value
      // }
    ]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='add-todo'
          type='text'
          placeholder='Новая задача'
        />
        <button
          type='submit'
          className='dasd'
        >
          Сохранить
        </button>
      </form>

      <input
        name='filter'
        type='text'
        placeholder='Поиск'
      />

      {tasks.length ? <p>todoList</p> : <p>List empty</p>}
      <button type='submit'>Удалить</button>
    </div>
  );
}

export default TodoApp;
