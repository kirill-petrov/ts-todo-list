import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoAdd } from '../../redux/reducers/todoReducer';

export default function AddingTodo() {
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      todoAdd({
        id: todoList.length + 1,
        text: e.target.inboxTodo.value,
      })
    );
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

      {/* <pre>tasks: {JSON.stringify(tasks, null, 2)}</pre> */}
    </div>
  );
}
