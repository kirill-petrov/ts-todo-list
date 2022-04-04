// import {
//   TODO_ADD,
//   TODO_DELETE,
//   TODO_CHANGE_STATUS,
//   TODO_EDIT,
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const data = JSON.parse(localStorage.getItem('ts-todo') || '{}');

export interface ITodoState {
  id: string;
  text: string;
}

const initialState: ITodoState[] = data.todo ? data.todo : [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    todoAdd: (state, action: PayloadAction<ITodoState>) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { todoAdd } = todoSlice.actions;

export default todoSlice.reducer;

// import loadState from '../utils/loadState';
// function todoReducer(state = loadState('SPTodoList') ?? [], action) {
//   switch (action.type) {
//     case TODO_ADD:
//       return [...state, action.payload];

// case TODO_DELETE:
//   return state.filter((item) => item.id !== action.payload);

// case TODO_EDIT:
//   return state.map((item) => {
//     if (item.id === action.payload.id) {
//       return {
//         ...item,
//         body: action.payload.newbody,
//       };
//     }
//     return item;
//   });

// case TODO_CHANGE_STATUS:
//   return state.map((item) => {
//     if (item.id === action.payload) {
//       return {
//         ...item,
//         status: !item.status,
//       };
//     }
//     return item;
//   });

//     default:
//       return state;
//   }
// }

// export default todoReducer;
