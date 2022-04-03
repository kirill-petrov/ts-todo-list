// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';

function TodoApp() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [tasks, setTasks] = useState([] as any);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();

    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        text: e.target.inboxTask.value,
      },
    ]);

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="inboxTask"
          type="text"
          placeholder="Новая задача"
        />
        <button type="submit">Сохранить</button>
      </form>

      <pre>tasks: {JSON.stringify(tasks, null, 2)}</pre>

      <input
        name="filter"
        type="text"
        placeholder="Поиск"
      />

      {tasks.length ? (
        <ul>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {tasks.map((item: any) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      ) : (
        <p>Задач нет</p>
      )}

      <button type="submit">Удалить</button>
      <ul>
        {/* <ol>записывать значение из inboxTask в tasks</ol> */}
        {/* <ol>выводить элементы задач</ol> */}
        <ol>выводить элементы задач</ol>
      </ul>
    </div>
  );
}

export default TodoApp;
