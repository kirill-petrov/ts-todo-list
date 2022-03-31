import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTasks(
      [
        // ...tasks,
        // {
        //   id: tasks.length + 1,
        //   task: e.target.value
        // }
      ]
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='add-todo' type="text" placeholder="Новая задача" />
        <button>Сохранить</button>
      </form>

      <input name='filter' type="text" placeholder="Поиск" />

      {
        tasks.length ?
          <p>todoList</p> :
          <p>List empty</p>
      }
      <button>Удалить</button>
    </div>
  );
};

export default TodoApp;
