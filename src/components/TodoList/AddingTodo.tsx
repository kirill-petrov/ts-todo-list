import React, { useState } from 'react';

export default function AddingTodo() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [tasks, setTasks] = useState([] as any);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        text: e.target.inboxTodo.value,
      },
    ]);

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="inboxTodo"
          type="text"
          placeholder="Новая задача"
        />
        <button type="submit">Сохранить</button>
      </form>

      <pre>tasks: {JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
}
