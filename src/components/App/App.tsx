// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container } from '@mui/material';

import Counter from '../Demo/Counter';
import Notes from '../Notes/Notes';
import Create from '../Notes/Create';
import TodoApp from '../TodoList/TodoApp';
import NotFound from '../NotFound';

export default function App() {
  return (
    <Router>
      <Container>
        <Link to="/counter">- Counter</Link>
        <Link to="/create">- Create</Link>
        <Link to="/notes">- Notes</Link>
        <Link to="/">- Home</Link>
        <hr />

        <Routes>
          <Route
            path="/"
            element={<TodoApp />}
          />
          <Route
            path="/counter"
            element={<Counter />}
          />
          <Route
            path="/notes"
            element={<Notes />}
          />
          <Route
            path="/create"
            element={<Create />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Container>
    </Router>
  );
}
