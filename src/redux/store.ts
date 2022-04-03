import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';
// import todoReducer from './reducers/todoReducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // todo: todoReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem('ts-todo', JSON.stringify(store.getState()));
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
